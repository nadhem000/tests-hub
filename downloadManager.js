/**
 * downloadManager.js
 * Handles print, PDF, and image capture for Tests Hub.
 * Depends on: html2canvas, jspdf (must be loaded globally)
 */

(function(global) {
    'use strict';

    // Internal helper: show/hide loading overlay
    function showLoading(overlayId) {
        const overlay = document.getElementById(overlayId || 'loading-overlay');
        if (overlay) overlay.style.display = 'flex';
    }

    function hideLoading(overlayId) {
        const overlay = document.getElementById(overlayId || 'loading-overlay');
        if (overlay) overlay.style.display = 'none';
    }

    // Default configuration
    const defaultConfig = {
        loadingOverlayId: 'loading-overlay',
        mainContainerSelector: '.Tests-Hub-main-container',
        correctionSectionId: 'correction-section',
        printButtonId: 'printDownloadBtn',
        pdfButtonId: 'pdfDownloadBtn',
        imageButtonId: 'imageSaveBtn',
        refreshDrawings: null,          // function to redraw SVGs before capture
        getCurrentLanguage: () => 'ar', // function returning language code
        translations: {},                // nested object with language keys
        defaultImageFileName: 'exam',
        defaultPdfFileName: 'exam.pdf',
        errorMessages: {
            imageCapture: 'Error creating image.',
            pdfCapture: 'Error generating PDF.'
        }
    };

    /**
     * Initialize download buttons with given configuration.
     * @param {Object} config - Overrides defaultConfig
     */
    function initDownloadManager(config) {
        const cfg = Object.assign({}, defaultConfig, config);

        // Attach event listeners
        const printBtn = document.getElementById(cfg.printButtonId);
        if (printBtn) {
            printBtn.addEventListener('click', () => handlePrint(cfg));
        }

        const pdfBtn = document.getElementById(cfg.pdfButtonId);
        if (pdfBtn) {
            pdfBtn.addEventListener('click', () => handlePdf(cfg));
        }

        const imageBtn = document.getElementById(cfg.imageButtonId);
        if (imageBtn) {
            imageBtn.addEventListener('click', () => handleImage(cfg));
        }
    }

    // ---------- Print ----------
    function handlePrint(cfg) {
        // Give time for overlay to show
        setTimeout(() => {
            window.print();
            hideLoading(cfg.loadingOverlayId);
        }, 50);
    }

    // ---------- Image Capture (PNG) ----------
    async function handleImage(cfg) {
        const mainContainer = document.querySelector(cfg.mainContainerSelector);
        const correctionSection = document.getElementById(cfg.correctionSectionId);
        const wasHidden = correctionSection && correctionSection.style.display === 'none';

        // Temporarily show correction if hidden
        if (wasHidden) correctionSection.style.display = 'block';

        // Refresh drawings if callback provided
        if (typeof cfg.refreshDrawings === 'function') {
            cfg.refreshDrawings();
        }

        showLoading(cfg.loadingOverlayId);

        try {
            const canvas = await html2canvas(mainContainer, {
                scale: 2,
                backgroundColor: null,
                logging: false,
                allowTaint: false,
                useCORS: true
            });

            // Build file name
            const lang = cfg.getCurrentLanguage();
            let fileName = cfg.defaultImageFileName;
            if (cfg.translations[lang] && cfg.translations[lang].TestsHub.defaultImageFileName) {
                fileName = cfg.translations[lang].TestsHub.defaultImageFileName;
            }
            fileName += '.png';

            const link = document.createElement('a');
            link.download = fileName;
            link.href = canvas.toDataURL('image/png');
            link.click();
        } catch (error) {
            console.error('Image capture error:', error);
            const lang = cfg.getCurrentLanguage();
            const msg = (cfg.translations[lang] && cfg.translations[lang].TestsHub.errorImageCapture) 
                        || cfg.errorMessages.imageCapture;
            alert(msg);
        } finally {
            hideLoading(cfg.loadingOverlayId);
            // Restore correction visibility
            if (wasHidden) correctionSection.style.display = 'none';
        }
    }

    // ---------- PDF Generation ----------
    async function handlePdf(cfg) {
        const correctionSection = document.getElementById(cfg.correctionSectionId);
        const wasHidden = correctionSection && correctionSection.style.display === 'none';
        const mainContainer = document.querySelector(cfg.mainContainerSelector);
        const body = document.body;

        // Ensure SVGs are up to date
        if (typeof cfg.refreshDrawings === 'function') {
            cfg.refreshDrawings();
        }

        // Apply print styles (optional class for print-like appearance)
        body.classList.add('Tests-Hub-print-mode');

        // Capture TEST part (hide correction)
        if (wasHidden) correctionSection.style.display = 'none';
        showLoading(cfg.loadingOverlayId);

        try {
            const testCanvas = await html2canvas(mainContainer, {
                scale: 1.5,
                backgroundColor: '#ffffff',
                logging: false,
                allowTaint: false,
                useCORS: true
            });

            // Capture CORRECTION part (show it)
            correctionSection.style.display = 'block';
            // Small delay for any reflow
            await new Promise(resolve => setTimeout(resolve, 50));
            const correctionCanvas = await html2canvas(correctionSection, {
                scale: 1.5,
                backgroundColor: '#ffffff',
                logging: false,
                allowTaint: false,
                useCORS: true
            });

            // Restore original visibility
            if (wasHidden) correctionSection.style.display = 'none';
            body.classList.remove('Tests-Hub-print-mode');

            // Build PDF
            const { jsPDF } = global.jspdf;
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'pt',
                format: 'a4'
            });

            const pageWidth = pdf.internal.pageSize.getWidth();
            const pageHeight = pdf.internal.pageSize.getHeight();
            const topMargin = 30;
            const bottomMargin = 30;
            const contentHeight = pageHeight - topMargin - bottomMargin;

            // File name for header and saving
            const lang = cfg.getCurrentLanguage();
            let fileName = cfg.defaultPdfFileName;
            if (cfg.translations[lang] && cfg.translations[lang].TestsHub.header.defaultPdfFileName) {
                fileName = cfg.translations[lang].TestsHub.header.defaultPdfFileName;
            }
            const headerFileName = fileName.replace(/\.pdf$/i, '');

            // Helper: split canvas into pages
            const getPageSlices = (canvas) => {
                const scale = pageWidth / canvas.width;
                const sliceCanvasHeight = contentHeight / scale;
                const slices = [];
                let y = 0;
                while (y < canvas.height) {
                    const height = Math.min(sliceCanvasHeight, canvas.height - y);
                    slices.push({ y, height });
                    y += height;
                }
                return slices;
            };

            const addHeaderFooter = (pageNum, totalPages) => {
                pdf.setFontSize(12);
                pdf.setTextColor(40, 40, 40);
                pdf.text(headerFileName, pageWidth / 2, topMargin / 2, { align: 'center' });

                const footerText = `Page ${pageNum} / ${totalPages}`;
                pdf.setFontSize(10);
                pdf.text(footerText, pageWidth / 2, pageHeight - bottomMargin / 2, { align: 'center' });

                pdf.setDrawColor(200, 200, 200);
                pdf.line(40, topMargin - 2, pageWidth - 40, topMargin - 2);
                pdf.line(40, pageHeight - bottomMargin + 2, pageWidth - 40, pageHeight - bottomMargin + 2);
            };

            const testSlices = getPageSlices(testCanvas);
            const correctionSlices = getPageSlices(correctionCanvas);
            const totalPages = testSlices.length + correctionSlices.length;
            let pageCounter = 1;

            const addSliceToPDF = (canvas, slice, isFirstPage) => {
                if (!isFirstPage) pdf.addPage();

                const sliceCanvas = document.createElement('canvas');
                sliceCanvas.width = canvas.width;
                sliceCanvas.height = slice.height;
                const ctx = sliceCanvas.getContext('2d');
                ctx.drawImage(canvas, 0, slice.y, canvas.width, slice.height, 0, 0, canvas.width, slice.height);
                const imgData = sliceCanvas.toDataURL('image/jpeg', 0.9);

                pdf.addImage(imgData, 'JPEG', 0, topMargin, pageWidth, slice.height * (pageWidth / canvas.width));
                addHeaderFooter(pageCounter, totalPages);
                pageCounter++;
            };

            // Add test pages
            testSlices.forEach((slice, index) => addSliceToPDF(testCanvas, slice, index === 0));
            // Add correction pages
            correctionSlices.forEach((slice, index) => addSliceToPDF(correctionCanvas, slice, index === 0 && testSlices.length === 0));

            pdf.save(fileName);
        } catch (error) {
            console.error('PDF generation error:', error);
            const lang = cfg.getCurrentLanguage();
            const msg = (cfg.translations[lang] && cfg.translations[lang].TestsHub.header.errorPdfCapture)
                        || cfg.errorMessages.pdfCapture;
            alert(msg);
            // Restore state
            if (wasHidden) correctionSection.style.display = 'none';
            body.classList.remove('Tests-Hub-print-mode');
        } finally {
            hideLoading(cfg.loadingOverlayId);
        }
    }

    // Expose public API
    global.DownloadManager = {
        init: initDownloadManager
    };

})(window);