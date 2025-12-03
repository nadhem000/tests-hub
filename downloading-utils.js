/**
 * Tests Hub - Downloading Utilities
 * Global functions for downloading tests in various formats
 */

const TestsHubDownloadingUtils = {
    
    // Configuration
    config: {
        pdfAPI: '/api/generate-pdf',
        odtAPI: '/api/generate-odt',
        pngAPI: '/api/generate-png',
        fallbackText: 'Test content download',
        version: '1.2.0',
        // Local library paths
        libPaths: {
            jsPDF: 'lib/jspdf.umd.min.js',
            html2canvas: 'lib/html2canvas.min.js'
        }
    },
    
    /**
     * Check if we're running locally (file:// protocol)
     */
    isLocalFileProtocol: function() {
        return window.location.protocol === 'file:';
    },
    
    /**
     * Download content as PDF
     * @param {Object} options - Download options
     */
    downloadAsPDF: function(options = {}) {
        const defaultOptions = {
            filename: `test_${Date.now()}.pdf`,
            title: 'Test',
            content: document.documentElement.outerHTML,
            testId: 'unknown',
            useCanvas: true
        };
        
        const finalOptions = { ...defaultOptions, ...options };
        
        // Show loading state
        this.showLoading('PDF');
        
        // Always use client-side generation for local files
        if (this.isLocalFileProtocol() || !this.config.pdfAPI || this.config.pdfAPI === '/api/generate-pdf') {
            console.log('Using client-side PDF generation (local file or no API configured)');
            this.generateClientSidePDF(finalOptions);
        } else {
            // Try server API first if available
            fetch(this.config.pdfAPI, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    html: finalOptions.content,
                    filename: finalOptions.filename,
                    testId: finalOptions.testId,
                    title: finalOptions.title
                })
            })
            .then(response => {
                if (response.ok) {
                    return response.blob();
                }
                throw new Error('Server PDF generation failed');
            })
            .then(blob => {
                this.downloadBlob(blob, finalOptions.filename);
                this.hideLoading('PDF');
            })
            .catch(error => {
                console.warn('PDF server generation failed, trying client-side:', error);
                this.generateClientSidePDF(finalOptions);
            });
        }
    },
    
    /**
     * Download content as ODT
     * @param {Object} options - Download options
     */
    downloadAsODT: function(options = {}) {
        const defaultOptions = {
            filename: `test_${Date.now()}.odt`,
            title: 'Test',
            content: this.extractTextContent(),
            testId: 'unknown'
        };
        
        const finalOptions = { ...defaultOptions, ...options };
        
        // Show loading state
        this.showLoading('ODT');
        
        // Always use fallback for local files
        if (this.isLocalFileProtocol() || !this.config.odtAPI || this.config.odtAPI === '/api/generate-odt') {
            this.fallbackToHTMLODT(finalOptions);
        } else {
            // Try server API first if available
            fetch(this.config.odtAPI, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    content: finalOptions.content,
                    filename: finalOptions.filename,
                    testId: finalOptions.testId,
                    title: finalOptions.title
                })
            })
            .then(response => {
                if (response.ok) {
                    return response.blob();
                }
                throw new Error('Server ODT generation failed');
            })
            .then(blob => {
                this.downloadBlob(blob, finalOptions.filename);
                this.hideLoading('ODT');
            })
            .catch(error => {
                console.warn('ODT server generation failed:', error);
                this.fallbackToHTMLODT(finalOptions);
            });
        }
    },
    
    /**
     * Download content as PNG image
     * @param {Object} options - Download options
     */
    downloadAsPNG: function(options = {}) {
        const defaultOptions = {
            filename: `test_${Date.now()}.png`,
            element: document.querySelector('.Tests-Hub-main-container') || document.body,
            testId: 'unknown'
        };
        
        const finalOptions = { ...defaultOptions, ...options };
        
        // Show loading state
        this.showLoading('PNG');
        
        // Check if html2canvas is available
        if (typeof html2canvas !== 'undefined') {
            this.generateClientSidePNG(finalOptions);
        } else {
            this.hideLoading('PNG');
            this.showNotification('PNG generation requires html2canvas library', 'error');
        }
    },
    
    /**
     * Generate PDF using client-side library (jsPDF + html2canvas)
     */
    generateClientSidePDF: function(options) {
        // Check if libraries are available
        if (typeof html2canvas !== 'undefined' && (typeof jspdf !== 'undefined' || window.jspdf)) {
            if (options.useCanvas !== false) {
                this.generatePDFWithCanvas(options);
            } else {
                this.generateTextPDF(options);
            }
        } else if (typeof jspdf !== 'undefined' || window.jspdf) {
            this.generateTextPDF(options);
        } else {
            console.warn('PDF libraries not available, falling back to HTML');
            this.fallbackToHTML(options);
        }
    },
    
    /**
     * Generate PDF using html2canvas to capture the page as an image - FIXED VERSION
     */
    generatePDFWithCanvas: function(options) {
        this.showNotification('Generating high-quality PDF...', 'info');
        
        // Use the main container for better results
        const targetElement = document.querySelector('.Tests-Hub-main-container') || document.body;
        
        // Create a temporary container for the clone
        const tempContainer = document.createElement('div');
        tempContainer.style.position = 'fixed';
        tempContainer.style.left = '-9999px';
        tempContainer.style.top = '0';
        tempContainer.style.zIndex = '-1000';
        tempContainer.style.opacity = '0';
        document.body.appendChild(tempContainer);
        
        // Clone the element
        const clone = targetElement.cloneNode(true);
        
        // Apply styling to the clone
        clone.style.width = targetElement.offsetWidth + 'px';
        clone.style.backgroundColor = '#ffffff';
        clone.style.padding = '20px';
        clone.style.boxSizing = 'border-box';
        
        // Remove interactive elements from the clone
        const elementsToRemove = clone.querySelectorAll(
            'button, input[type="radio"], .Tests-Hub-download-buttons, .Tests-Hub-toggle-button, .Tests-Hub-language-selector, .Tests-Hub-theme-toggle, .Tests-Hub-back-button'
        );
        
        elementsToRemove.forEach(el => el.remove());
        
        // Handle textareas - replace with divs showing placeholder text
        clone.querySelectorAll('textarea').forEach(el => {
            const div = document.createElement('div');
            div.textContent = el.value || '____________';
            div.style.border = '1px solid #aaa';
            div.style.borderRadius = '4px';
            div.style.padding = '5px 8px';
            div.style.minHeight = '30px';
            div.style.backgroundColor = '#f9f9f9';
            div.style.margin = '2px';
            div.style.display = 'inline-block';
            div.style.minWidth = '100px';
            el.parentNode.replaceChild(div, el);
        });
        
        // Append clone to temp container
        tempContainer.appendChild(clone);
        
        // Ensure all images have loaded or have a fallback
        const images = clone.querySelectorAll('img');
        let imagesLoaded = 0;
        const totalImages = images.length;
        
        const checkImagesAndCapture = () => {
            imagesLoaded++;
            if (imagesLoaded >= totalImages) {
                setTimeout(() => this.captureAndGeneratePDF(tempContainer, clone, options), 100);
            }
        };
        
        if (totalImages === 0) {
            // No images, proceed immediately
            setTimeout(() => this.captureAndGeneratePDF(tempContainer, clone, options), 100);
        } else {
            images.forEach(img => {
                // Handle local file paths for images
                if (this.isLocalFileProtocol() && img.src.startsWith('file://')) {
                    // For local files, we need to handle CORS issues
                    img.crossOrigin = 'anonymous';
                }
                
                if (img.complete) {
                    checkImagesAndCapture();
                } else {
                    img.onload = checkImagesAndCapture;
                    img.onerror = () => {
                        // If image fails to load, replace with placeholder
                        const placeholder = document.createElement('div');
                        placeholder.textContent = `[Image: ${img.alt || 'Figure'}]`;
                        placeholder.style.border = '1px dashed #ccc';
                        placeholder.style.padding = '10px';
                        placeholder.style.textAlign = 'center';
                        placeholder.style.backgroundColor = '#f5f5f5';
                        img.parentNode.replaceChild(placeholder, img);
                        checkImagesAndCapture();
                    };
                }
            });
            
            // Timeout after 3 seconds in case images don't load
            setTimeout(() => {
                this.captureAndGeneratePDF(tempContainer, clone, options);
            }, 3000);
        }
    },
    
    /**
     * Helper function to capture clone and generate PDF - FIXED VERSION
     */
    captureAndGeneratePDF: function(tempContainer, clone, options) {
        if (!tempContainer.parentNode || !clone.parentNode) {
            console.error('Clone was removed before capture');
            this.generateTextPDF(options);
            return;
        }
        
        const self = this;
        
        // Configure html2canvas options
        const canvasOptions = {
            scale: 1.5, // Good balance between quality and file size
            useCORS: true,
            logging: false,
            backgroundColor: '#ffffff',
            allowTaint: true, // Allow tainted canvas for local files
            foreignObjectRendering: true,
            width: clone.scrollWidth,
            height: clone.scrollHeight,
            onclone: function(clonedDoc, clonedElement) {
                // Ensure proper styling on the cloned element
                clonedElement.style.backgroundColor = '#ffffff';
                clonedElement.style.padding = '20px';
                clonedElement.style.boxSizing = 'border-box';
                
                // Make sure all elements are visible
                clonedElement.querySelectorAll('*').forEach(el => {
                    if (window.getComputedStyle(el).display === 'none') {
                        el.style.display = 'block';
                    }
                });
            }
        };
        
        html2canvas(clone, canvasOptions).then(canvas => {
            // Clean up the temporary container
            if (tempContainer.parentNode) {
                document.body.removeChild(tempContainer);
            }
            
            const imgData = canvas.toDataURL('image/jpeg', 0.9);
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            
            // Calculate PDF dimensions (A4: 210x297mm)
            const pdfWidth = 190; // Width in mm with margins
            const pdfHeight = (imgHeight * pdfWidth) / imgWidth;
            
            // Create PDF
            const jsPDF = window.jspdf ? window.jspdf.jsPDF : jspdf.jsPDF;
            const doc = new jsPDF({
                orientation: pdfHeight > 280 ? 'portrait' : 'portrait',
                unit: 'mm',
                format: 'a4'
            });
            
            // Add title page
            doc.setFontSize(18);
            doc.setFont('helvetica', 'bold');
            doc.text(options.title, 105, 20, { align: 'center' });
            
            doc.setFontSize(12);
            doc.setFont('helvetica', 'normal');
            doc.text(`Generated: ${new Date().toLocaleDateString()}`, 105, 30, { align: 'center' });
            doc.text(`Test ID: ${options.testId}`, 105, 35, { align: 'center' });
            
            // Add a new page for the content
            doc.addPage();
            
            // Add image to PDF (centered with margins)
            const xPos = 10; // Left margin
            const yPos = 10; // Top margin
            const contentWidth = pdfWidth;
            const contentHeight = pdfHeight;
            
            doc.addImage(imgData, 'JPEG', xPos, yPos, contentWidth, contentHeight, '', 'MEDIUM');
            
            // Add page numbers
            const pageCount = doc.internal.getNumberOfPages();
            for (let i = 1; i <= pageCount; i++) {
                doc.setPage(i);
                doc.setFontSize(10);
                doc.setFont('helvetica', 'italic');
                doc.text(`Page ${i} of ${pageCount}`, 105, 287, { align: 'center' });
            }
            
            // Save PDF
            doc.save(options.filename);
            self.hideLoading('PDF');
            self.showNotification('PDF generated successfully!', 'success');
            
        }).catch(error => {
            console.error('Canvas generation failed:', error);
            
            // Clean up the temporary container on error
            if (tempContainer.parentNode) {
                document.body.removeChild(tempContainer);
            }
            
            // Fall back to text PDF
            self.generateTextPDF(options);
        });
    },
    
    /**
     * Generate text-based PDF (fallback) - IMPROVED VERSION
     */
    generateTextPDF: function(options) {
        try {
            this.showNotification('Generating text-based PDF...', 'info');
            
            const jsPDF = window.jspdf ? window.jspdf.jsPDF : jspdf.jsPDF;
            const doc = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4'
            });
            
            let yPos = 20;
            const margin = 20;
            const pageWidth = 210 - 2 * margin;
            
            // Add title
            doc.setFontSize(18);
            doc.setFont('helvetica', 'bold');
            const titleLines = doc.splitTextToSize(options.title, pageWidth);
            doc.text(titleLines, margin, yPos);
            yPos += titleLines.length * 7 + 10;
            
            // Add metadata
            doc.setFontSize(10);
            doc.setFont('helvetica', 'normal');
            doc.text(`Generated: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`, margin, yPos);
            yPos += 5;
            doc.text(`Test ID: ${options.testId}`, margin, yPos);
            yPos += 10;
            
            // Add separator
            doc.setDrawColor(46, 139, 87);
            doc.setLineWidth(0.5);
            doc.line(margin, yPos, 210 - margin, yPos);
            yPos += 10;
            
            // Get structured content
            const sections = this.extractStructuredContent();
            
            // Add each section
            sections.forEach(section => {
                // Check if we need a new page
                if (yPos > 270) {
                    doc.addPage();
                    yPos = 20;
                }
                
                // Section header
                if (section.type === 'header') {
                    doc.setFontSize(14);
                    doc.setFont('helvetica', 'bold');
                    const lines = doc.splitTextToSize(section.content, pageWidth);
                    doc.text(lines, margin, yPos);
                    yPos += lines.length * 7 + 5;
                }
                // Question
                else if (section.type === 'question') {
                    doc.setFontSize(12);
                    doc.setFont('helvetica', 'bold');
                    const questionText = doc.splitTextToSize(section.content, pageWidth);
                    doc.text(questionText, margin, yPos);
                    yPos += questionText.length * 6 + 5;
                }
                // Table
                else if (section.type === 'table') {
                    // Simple table representation
                    doc.setFontSize(10);
                    doc.setFont('courier', 'normal');
                    const tableLines = section.content.split('\n');
                    
                    for (let line of tableLines) {
                        if (yPos > 270) {
                            doc.addPage();
                            yPos = 20;
                        }
                        doc.text(line, margin, yPos);
                        yPos += 5;
                    }
                    yPos += 5;
                    doc.setFont('helvetica');
                }
                // Regular text
                else {
                    doc.setFontSize(11);
                    doc.setFont('helvetica', 'normal');
                    const lines = doc.splitTextToSize(section.content, pageWidth);
                    
                    for (let i = 0; i < lines.length; i++) {
                        if (yPos > 270) {
                            doc.addPage();
                            yPos = 20;
                        }
                        doc.text(lines[i], margin, yPos);
                        yPos += 6;
                    }
                    yPos += 3;
                }
            });
            
            // Add footer
            const pageCount = doc.internal.getNumberOfPages();
            for (let i = 1; i <= pageCount; i++) {
                doc.setPage(i);
                doc.setFontSize(8);
                doc.setFont('helvetica', 'italic');
                doc.text(`Page ${i} of ${pageCount} - Tests Hub`, 105, 287, { align: 'center' });
            }
            
            doc.save(options.filename);
            this.hideLoading('PDF');
            this.showNotification('PDF generated (text format)', 'success');
            
        } catch (error) {
            console.error('Text PDF generation failed:', error);
            this.fallbackToHTML(options);
        }
    },
    
    /**
     * Generate PNG using html2canvas - FIXED VERSION
     */
    generateClientSidePNG: function(options) {
        const targetElement = options.element;
        
        // Create a temporary container
        const tempContainer = document.createElement('div');
        tempContainer.style.position = 'fixed';
        tempContainer.style.left = '-9999px';
        tempContainer.style.top = '0';
        tempContainer.style.zIndex = '-1000';
        document.body.appendChild(tempContainer);
        
        // Clone the element
        const clone = targetElement.cloneNode(true);
        clone.style.width = targetElement.offsetWidth + 'px';
        clone.style.backgroundColor = '#ffffff';
        
        // Remove download buttons from clone
        clone.querySelectorAll('.Tests-Hub-download-buttons').forEach(el => el.remove());
        
        tempContainer.appendChild(clone);
        
        html2canvas(clone, {
            scale: 1.5,
            useCORS: true,
            logging: false,
            backgroundColor: '#ffffff',
            allowTaint: true,
            foreignObjectRendering: true,
            width: clone.scrollWidth,
            height: clone.scrollHeight
        }).then(canvas => {
            // Clean up
            if (tempContainer.parentNode) {
                document.body.removeChild(tempContainer);
            }
            
            canvas.toBlob(blob => {
                if (blob) {
                    this.downloadBlob(blob, options.filename);
                    this.hideLoading('PNG');
                    this.showNotification('Screenshot saved as PNG!', 'success');
                } else {
                    throw new Error('Failed to create blob from canvas');
                }
            }, 'image/png', 1.0);
        }).catch(error => {
            // Clean up on error
            if (tempContainer.parentNode) {
                document.body.removeChild(tempContainer);
            }
            
            console.error('html2canvas failed:', error);
            this.hideLoading('PNG');
            this.showNotification('Failed to generate PNG: ' + error.message, 'error');
        });
    },
    
    /**
     * Extract structured content for text PDF
     */
    extractStructuredContent: function() {
        const sections = [];
        const mainContainer = document.querySelector('.Tests-Hub-main-container');
        
        if (!mainContainer) {
            sections.push({ type: 'text', content: this.config.fallbackText });
            return sections;
        }
        
        // Get all relevant sections
        const contentElements = mainContainer.querySelectorAll(
            '.Tests-Hub-test-header, .Tests-Hub-test-section, .Tests-Hub-instructions, .Tests-Hub-correction-section:not(.Tests-Hub-hidden)'
        );
        
        contentElements.forEach(element => {
            // Skip download buttons container
            if (element.classList.contains('Tests-Hub-download-buttons')) return;
            
            const clone = element.cloneNode(true);
            
            // Remove unwanted elements
            clone.querySelectorAll('button, input, textarea, .Tests-Hub-download-buttons, .Tests-Hub-toggle-button').forEach(el => el.remove());
            
            // Get element type
            let type = 'text';
            if (element.classList.contains('Tests-Hub-test-header')) {
                type = 'header';
            } else if (element.classList.contains('Tests-Hub-instructions')) {
                type = 'header';
            } else if (element.querySelector('h2, h3')) {
                type = 'header';
            } else if (element.querySelector('.Tests-Hub-question-number')) {
                type = 'question';
            } else if (element.querySelector('table')) {
                type = 'table';
            }
            
            // Process tables for text representation
            if (type === 'table') {
                const table = clone.querySelector('table');
                if (table) {
                    const rows = table.querySelectorAll('tr');
                    let tableText = '';
                    
                    rows.forEach(row => {
                        const cells = row.querySelectorAll('th, td');
                        let rowText = '| ';
                        cells.forEach(cell => {
                            const textarea = cell.querySelector('textarea');
                            const content = textarea ? (textarea.value || '______') : cell.textContent.trim();
                            rowText += content.padEnd(20, ' ') + ' | ';
                        });
                        tableText += rowText + '\n';
                    });
                    
                    sections.push({ type: 'table', content: tableText });
                    return;
                }
            }
            
            // Get text content
            const content = clone.textContent
                .replace(/\s+/g, ' ')
                .replace(/([.!?])\s+/g, '$1\n')
                .trim();
            
            if (content) {
                sections.push({ type, content });
            }
        });
        
        return sections;
    },
    
    /**
     * Fallback to downloading as HTML for ODT
     */
    fallbackToHTMLODT: function(options) {
        try {
            // Create a better formatted HTML version
            const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${options.title}</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; margin: 40px; }
        h1 { color: #2E8B57; text-align: center; }
        h2 { color: #3CB371; border-bottom: 2px solid #3CB371; padding-bottom: 5px; }
        h3 { color: #4CAF50; }
        .question { margin: 20px 0; padding-left: 15px; }
        .question-number { font-weight: bold; color: #2E8B57; }
        table { border-collapse: collapse; width: 100%; margin: 15px 0; }
        th, td { border: 1px solid #ddd; padding: 10px; text-align: center; }
        th { background-color: #2E8B57; color: white; }
        tr:nth-child(even) { background-color: #f9f9f9; }
        .instructions { background-color: #f0f7f0; padding: 15px; border-left: 4px solid #2E8B57; margin: 15px 0; }
        .correction { background-color: #f0f7f0; padding: 15px; margin: 15px 0; border: 1px solid #27ae60; }
        .formula { font-family: 'Times New Roman', serif; font-style: italic; text-align: center; margin: 10px 0; }
        .image-container { text-align: center; margin: 20px 0; }
        .image-caption { font-style: italic; color: #666; margin-top: 5px; }
    </style>
</head>
<body>
    <h1>${options.title}</h1>
    <p><strong>Generated:</strong> ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</p>
    <p><strong>Test ID:</strong> ${options.testId}</p>
    <hr>
    <div>${this.generateHTMLContent()}</div>
</body>
</html>`;
            
            const htmlBlob = new Blob([htmlContent], { 
                type: 'text/html' 
            });
            this.downloadBlob(htmlBlob, options.filename.replace('.odt', '.html'));
            this.hideLoading('ODT');
            this.showNotification('Downloaded as HTML (ODT not available)', 'info');
        } catch (fallbackError) {
            console.error('Fallback failed:', fallbackError);
            const textBlob = new Blob([options.content], { type: 'text/plain' });
            const textFilename = options.filename.replace('.odt', '.txt');
            this.downloadBlob(textBlob, textFilename);
            this.hideLoading('ODT');
            this.showNotification('Downloaded as text file (.txt)', 'info');
        }
    },
    
    /**
     * Fallback to downloading as HTML
     */
    fallbackToHTML: function(options) {
        const htmlBlob = new Blob([options.content], { type: 'text/html' });
        const htmlFilename = options.filename.replace('.pdf', '.html');
        this.downloadBlob(htmlBlob, htmlFilename);
        this.hideLoading('PDF');
        this.showNotification('Downloaded as HTML file instead of PDF', 'info');
    },
    
    /**
     * Extract better formatted content from page
     */
    extractBetterFormattedContent: function() {
        // Get main content areas
        const mainContainer = document.querySelector('.Tests-Hub-main-container');
        if (!mainContainer) {
            return this.extractFormattedContent();
        }
        
        // Clone the container to avoid modifying the original
        const clone = mainContainer.cloneNode(true);
        
        // Remove elements we don't want in text
        clone.querySelectorAll('.Tests-Hub-download-buttons, button, .Tests-Hub-toggle-button, .Tests-Hub-header-container, .Tests-Hub-footer-container').forEach(el => el.remove());
        
        // Replace textareas with placeholder text
        clone.querySelectorAll('textarea').forEach(el => {
            const placeholder = document.createElement('span');
            placeholder.textContent = el.value || '____________';
            placeholder.style.color = '#666';
            el.parentNode.replaceChild(placeholder, el);
        });
        
        // Replace radio buttons with [V/F]
        clone.querySelectorAll('.Tests-Hub-true-false').forEach(el => {
            const labels = el.querySelectorAll('label');
            const questionText = el.textContent.replace(/\s+/g, ' ').trim();
            el.textContent = questionText;
        });
        
        // Process tables for text representation
        clone.querySelectorAll('table').forEach(table => {
            const rows = table.querySelectorAll('tr');
            let tableText = '\n';
            
            rows.forEach(row => {
                const cells = row.querySelectorAll('th, td');
                let rowText = '';
                cells.forEach(cell => {
                    // Get cell content, handling textareas
                    let cellContent = '';
                    const textarea = cell.querySelector('textarea');
                    if (textarea) {
                        cellContent = textarea.value || '______';
                    } else {
                        cellContent = cell.textContent.trim();
                    }
                    rowText += cellContent + ' | ';
                });
                tableText += rowText.slice(0, -2) + '\n';
            });
            
            // Replace table with text representation
            const tableContainer = document.createElement('div');
            tableContainer.textContent = tableText;
            table.parentNode.replaceChild(tableContainer, table);
        });
        
        // Process images
        clone.querySelectorAll('.Tests-Hub-image-container').forEach(imgContainer => {
            const img = imgContainer.querySelector('img');
            const caption = imgContainer.querySelector('.Tests-Hub-image-caption');
            const imgText = `[IMAGE: ${img ? img.alt || 'Figure' : 'Figure'} - ${caption ? caption.textContent : ''}]`;
            imgContainer.textContent = imgText;
        });
        
        // Get text content with proper line breaks
        let content = clone.textContent
            .replace(/\s+/g, ' ')
            .replace(/([.!?])\s+/g, '$1\n')
            .replace(/\n\s*\n\s*\n/g, '\n\n') // Remove multiple empty lines
            .trim();
        
        // Add some formatting markers
        content = content
            .replace(/Partie/g, '\n\n=== $& ===\n')
            .replace(/Exercice/g, '\n\n--- $& ---\n')
            .replace(/Question \d+/g, '\n$&\n')
            .replace(/\d°\)/g, '\n$&\n');
        
        return content || this.config.fallbackText;
    },
    
    /**
     * Generate HTML content for fallback downloads
     */
    generateHTMLContent: function() {
        const mainContainer = document.querySelector('.Tests-Hub-main-container');
        if (!mainContainer) return '';
        
        const clone = mainContainer.cloneNode(true);
        
        // Clean up the clone
        clone.querySelectorAll('.Tests-Hub-download-buttons, button, .Tests-Hub-toggle-button, .Tests-Hub-header-container, .Tests-Hub-footer-container').forEach(el => el.remove());
        
        // Preserve tables and images in HTML
        return clone.innerHTML;
    },
    
    /**
     * Extract formatted content from page (original method)
     */
    extractFormattedContent: function() {
        // Get main content areas
        const contentElements = [
            '.Tests-Hub-test-header',
            '.Tests-Hub-test-section',
            '.Tests-Hub-instructions',
            '.Tests-Hub-correction-section:not(.Tests-Hub-hidden)'
        ];
        
        let content = '';
        
        contentElements.forEach(selector => {
            document.querySelectorAll(selector).forEach(element => {
                // Clone element to avoid modifying original
                const clone = element.cloneNode(true);
                
                // Remove elements we don't want in text
                clone.querySelectorAll('.Tests-Hub-download-buttons, button, .Tests-Hub-toggle-button').forEach(el => el.remove());
                
                // Replace textareas with placeholder
                clone.querySelectorAll('textarea').forEach(el => {
                    const placeholder = document.createElement('span');
                    placeholder.textContent = '____________';
                    placeholder.style.color = '#666';
                    el.parentNode.replaceChild(placeholder, el);
                });
                
                // Replace radio buttons with [V/F]
                clone.querySelectorAll('.Tests-Hub-true-false').forEach(el => {
                    const text = el.textContent.replace(/\s+/g, ' ').trim();
                    content += text + '\n';
                });
                
                // Get text content with proper line breaks
                const text = clone.textContent
                    .replace(/\s+/g, ' ')
                    .replace(/([.!?])\s+/g, '$1\n')
                    .trim();
                
                if (text) {
                    content += text + '\n\n';
                }
            });
        });
        
        // Clean up the content
        content = content
            .replace(/\n\s*\n\s*\n/g, '\n\n') // Remove multiple empty lines
            .replace(/Tableau:/g, '\nTableau:\n')
            .replace(/Question \d+/g, '\n$&\n');
        
        return content || this.config.fallbackText;
    },
    
    /**
     * Extract text content from page
     */
    extractTextContent: function() {
        return this.extractBetterFormattedContent();
    },
    
    /**
     * Download blob as file
     */
    downloadBlob: function(blob, filename) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    },
    
    /**
     * Show loading state for a download type
     */
    showLoading: function(type) {
        const button = document.getElementById(`download${type}`);
        if (button) {
            const originalHTML = button.innerHTML;
            button.innerHTML = `<span>⏳</span><span>Generating...</span>`;
            button.disabled = true;
            button.dataset.originalHTML = originalHTML;
        }
        
        // Also show a toast notification
        this.showNotification(`Generating ${type} file...`, 'info');
    },
    
    /**
     * Hide loading state
     */
    hideLoading: function(type) {
        const button = document.getElementById(`download${type}`);
        if (button && button.dataset.originalHTML) {
            button.innerHTML = button.dataset.originalHTML;
            button.disabled = false;
            delete button.dataset.originalHTML;
        }
    },
    
    /**
     * Show notification/toast
     */
    showNotification: function(message, type = 'info') {
        // Remove existing notification
        const existing = document.getElementById('download-notification');
        if (existing) existing.remove();
        
        // Create notification
        const notification = document.createElement('div');
        notification.id = 'download-notification';
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 8px;
            color: white;
            font-weight: 600;
            z-index: 10000;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            animation: slideIn 0.3s ease;
            max-width: 300px;
        `;
        
        // Set color based on type
        const colors = {
            success: '#2E8B57',
            error: '#e74c3c',
            info: '#3498db',
            warning: '#f39c12'
        };
        
        notification.style.backgroundColor = colors[type] || colors.info;
        
        notification.textContent = message;
        document.body.appendChild(notification);
        
        // Auto-remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
        
        // Add CSS animations if not already present
        if (!document.getElementById('download-notification-styles')) {
            const style = document.createElement('style');
            style.id = 'download-notification-styles';
            style.textContent = `
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes slideOut {
                    from { transform: translateX(0); opacity: 1; }
                    to { transform: translateX(100%); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }
    },
    
    /**
     * Initialize download buttons on a page
     * @param {Object} testInfo - Test information
     */
    initDownloadButtons: function(testInfo = {}) {
        const defaultTestInfo = {
            id: window.location.pathname.split('/').pop().replace('.html', ''),
            title: document.title,
            content: document.documentElement.outerHTML,
            element: document.querySelector('.Tests-Hub-main-container') || document.body
        };
        
        const finalTestInfo = { ...defaultTestInfo, ...testInfo };
        
        // PDF Button
        const pdfButton = document.getElementById('downloadPdf');
        if (pdfButton) {
            pdfButton.addEventListener('click', () => {
                this.downloadAsPDF({
                    content: finalTestInfo.content,
                    filename: `${finalTestInfo.id || 'test'}_${Date.now()}.pdf`,
                    title: finalTestInfo.title,
                    testId: finalTestInfo.id
                });
            });
        }
        
        // ODT Button
        const odtButton = document.getElementById('downloadOdt');
        if (odtButton) {
            odtButton.addEventListener('click', () => {
                this.downloadAsODT({
                    filename: `${finalTestInfo.id || 'test'}_${Date.now()}.odt`,
                    title: finalTestInfo.title,
                    testId: finalTestInfo.id
                });
            });
        }
        
        // PNG Button
        const pngButton = document.getElementById('downloadPng');
        if (pngButton) {
            pngButton.addEventListener('click', () => {
                this.downloadAsPNG({
                    filename: `${finalTestInfo.id || 'test'}_${Date.now()}.png`,
                    testId: finalTestInfo.id,
                    element: finalTestInfo.element
                });
            });
        }
        
        console.log('Tests Hub Downloading Utilities initialized');
    },
    
    /**
     * Load required libraries dynamically
     */
    loadLibraries: function() {
        return new Promise((resolve) => {
            let loadedCount = 0;
            const totalLibraries = 2;
            
            const checkAllLoaded = () => {
                loadedCount++;
                if (loadedCount === totalLibraries) {
                    console.log('All libraries loaded');
                    resolve();
                }
            };
            
            // Load jsPDF if not already loaded
            if (typeof jspdf === 'undefined' && !window.jspdf) {
                const script = document.createElement('script');
                script.src = this.config.libPaths.jsPDF;
                script.onload = () => {
                    console.log('jsPDF loaded');
                    checkAllLoaded();
                };
                script.onerror = () => {
                    console.error('Failed to load jsPDF from:', this.config.libPaths.jsPDF);
                    checkAllLoaded();
                };
                document.head.appendChild(script);
            } else {
                loadedCount++;
            }
            
            // Load html2canvas if not already loaded
            if (typeof html2canvas === 'undefined') {
                const script = document.createElement('script');
                script.src = this.config.libPaths.html2canvas;
                script.onload = () => {
                    console.log('html2canvas loaded');
                    checkAllLoaded();
                };
                script.onerror = () => {
                    console.error('Failed to load html2canvas from:', this.config.libPaths.html2canvas);
                    checkAllLoaded();
                };
                document.head.appendChild(script);
            } else {
                loadedCount++;
            }
            
            // If both already loaded
            if (loadedCount === totalLibraries) {
                resolve();
            }
        });
    },
    
    /**
     * Set custom library paths
     * @param {Object} paths - Library paths
     */
    setLibPaths: function(paths) {
        Object.assign(this.config.libPaths, paths);
    }
};

// Auto-initialize when DOM is ready
// Auto-initialize when DOM is ready with error handling for local files
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', async () => {
        try {
            // Check if we're running locally
            if (window.location.protocol === 'file:') {
                console.log('Running locally - using simplified initialization');
                // Skip library loading if they're already included in HTML
                if (!window.jspdf && typeof jspdf === 'undefined') {
                    console.warn('jsPDF not loaded - PDF generation may be limited');
                }
                if (typeof html2canvas === 'undefined') {
                    console.warn('html2canvas not loaded - image-based PDF/PNG generation unavailable');
                }
            } else {
                await TestsHubDownloadingUtils.loadLibraries();
            }
            
            // Check if we're on a test page by looking for download buttons
            if (document.getElementById('downloadPdf') || 
                document.getElementById('downloadOdt') || 
                document.getElementById('downloadPng')) {
                TestsHubDownloadingUtils.initDownloadButtons();
            }
        } catch (error) {
            console.error('Initialization failed:', error);
            // Still try to initialize buttons even if libraries fail
            if (document.getElementById('downloadPdf') || 
                document.getElementById('downloadOdt') || 
                document.getElementById('downloadPng')) {
                TestsHubDownloadingUtils.initDownloadButtons();
            }
        }
    });
} else {
    (async () => {
        try {
            if (window.location.protocol === 'file:') {
                console.log('Running locally - using simplified initialization');
            } else {
                await TestsHubDownloadingUtils.loadLibraries();
            }
            
            if (document.getElementById('downloadPdf') || 
                document.getElementById('downloadOdt') || 
                document.getElementById('downloadPng')) {
                TestsHubDownloadingUtils.initDownloadButtons();
            }
        } catch (error) {
            console.error('Initialization failed:', error);
            if (document.getElementById('downloadPdf') || 
                document.getElementById('downloadOdt') || 
                document.getElementById('downloadPng')) {
                TestsHubDownloadingUtils.initDownloadButtons();
            }
        }
    })();
}

// Make it globally available
window.TestsHubDownloadingUtils = TestsHubDownloadingUtils;