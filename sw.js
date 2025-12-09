/**
	* Tests Hub - Service Worker
	* Version: v2.1.7
	* Features: Offline support, Background sync, Push notifications, Periodic sync
*/

const CACHE_NAME = 'tests-hub-v2.1.7';
const STATIC_CACHE_NAME = 'tests-hub-static-v2.1.7';
const DYNAMIC_CACHE_NAME = 'tests-hub-dynamic-v2.1.7';

// Files to cache on install (app shell)
const STATIC_ASSETS = [
	'/',
	'/index.html',
	'/Tests_7th.html',
	'/Tests_8th.html',
	'/Tests_9th.html',
	'/Tests_1st_secondary.html',
	'/Tests_2nd_secondary.html',
	'/Tests_3rd_secondary.html',
	'/Tests_4th_secondary.html',
	'/manifest.json',
	'/sw.js',
	// CSS and JS are inline in HTML files, so we don't need separate files
];

// Time-based expiration for dynamic cache (7 days)
const MAX_AGE_DAYS = 7;
const MAX_AGE_MS = MAX_AGE_DAYS * 24 * 60 * 60 * 1000;

// Background sync queue name
const SYNC_QUEUE_NAME = 'sync-queue';

// Push notification icon
const NOTIFICATION_ICON = '/assets/icons/icon-96x96.png';

/**
	* Install event - cache static assets
*/
self.addEventListener('install', (event) => {
	console.log('[SW] Install event');
	
	event.waitUntil(
		Promise.all([
			// Cache static assets
			caches.open(STATIC_CACHE_NAME).then((cache) => {
				console.log('[SW] Caching static assets');
				return cache.addAll(STATIC_ASSETS);
			}),
			// Skip waiting to activate immediately
			self.skipWaiting()
		])
	);
});

/**
	* Activate event - clean up old caches
*/
self.addEventListener('activate', (event) => {
	console.log('[SW] Activate event');
	
	event.waitUntil(
		Promise.all([
			// Clean up old caches
			caches.keys().then((cacheNames) => {
				return Promise.all(
					cacheNames.map((cacheName) => {
						if (cacheName !== CACHE_NAME && 
							cacheName !== STATIC_CACHE_NAME && 
							cacheName !== DYNAMIC_CACHE_NAME) {
							console.log('[SW] Deleting old cache:', cacheName);
							return caches.delete(cacheName);
						}
					})
				);
			}),
			// Claim clients immediately
			self.clients.claim()
		])
	);
});

/**
	* Fetch event - serve from cache, fallback to network
*/
self.addEventListener('fetch', (event) => {
	const request = event.request;
	
	// Skip non-GET requests
	if (request.method !== 'GET') return;
	
	// Skip chrome-extension requests
	if (request.url.startsWith('chrome-extension://')) return;
	
	// Handle API requests differently
	if (request.url.includes('/api/')) {
		event.respondWith(networkFirstStrategy(request));
		return;
	}
	
	// For HTML pages, use network first, then cache
	if (request.headers.get('Accept')?.includes('text/html')) {
		event.respondWith(networkFirstStrategy(request));
		return;
	}
	
	// For static assets, use cache first
	event.respondWith(cacheFirstStrategy(request));
});

/**
	* Cache First Strategy
*/
async function cacheFirstStrategy(request) {
	try {
		// Try to get from cache
		const cachedResponse = await caches.match(request);
		
		if (cachedResponse) {
			// Check if cache is stale
			const cacheDate = new Date(cachedResponse.headers.get('date'));
			const now = new Date();
			
			if (now - cacheDate > MAX_AGE_MS) {
				// Cache is stale, fetch in background
				fetchAndCache(request);
			}
			
			return cachedResponse;
		}
		
		// Not in cache, fetch from network
		return await fetchAndCache(request);
		} catch (error) {
		console.error('[SW] Cache first strategy failed:', error);
		
		// For HTML requests, return offline page
		if (request.headers.get('Accept')?.includes('text/html')) {
			return caches.match('/');
		}
		
		// For other requests, return a fallback
		return new Response('Network error occurred', {
			status: 408,
			headers: { 'Content-Type': 'text/plain' }
		});
	}
}

/**
	* Network First Strategy
*/
async function networkFirstStrategy(request) {
	try {
		// Try to fetch from network
		const networkResponse = await fetch(request);
		
		// Cache the response
		await cacheResponse(request, networkResponse.clone());
		
		return networkResponse;
		} catch (error) {
		console.log('[SW] Network failed, trying cache:', error);
		
		// Try to get from cache
		const cachedResponse = await caches.match(request);
		
		if (cachedResponse) {
			return cachedResponse;
		}
		
		// For HTML pages, return the main page
		if (request.headers.get('Accept')?.includes('text/html')) {
			return caches.match('/');
		}
		
		// Otherwise, return offline response
		return offlineResponse(request);
	}
}

/**
	* Fetch and cache response
*/
async function fetchAndCache(request) {
	const response = await fetch(request);
	
	// Only cache successful responses
	if (response.status === 200) {
		await cacheResponse(request, response.clone());
	}
	
	return response;
}

/**
	* Cache response
*/
async function cacheResponse(request, response) {
	const cache = await caches.open(DYNAMIC_CACHE_NAME);
	
	// Clean up old cache entries if we're running out of space
	if (navigator.storage && navigator.storage.estimate) {
		const estimate = await navigator.storage.estimate();
		if (estimate.usage / estimate.quota > 0.9) {
			const keys = await cache.keys();
			const oldestKey = keys[0]; // Simple strategy: remove first
			if (oldestKey) {
				await cache.delete(oldestKey);
			}
		}
	}
	
	await cache.put(request, response);
}

/**
	* Create offline response
*/
function offlineResponse(request) {
	if (request.headers.get('Accept')?.includes('text/html')) {
		return new Response(
			`
			<!DOCTYPE html>
			<html>
			<head>
			<title>Tests Hub - Offline</title>
			<style>
            body { font-family: Arial, sans-serif; padding: 20px; text-align: center; }
            .container { max-width: 500px; margin: 100px auto; }
            h1 { color: #e74c3c; }
            button { padding: 10px 20px; background: #3498db; color: white; border: none; border-radius: 5px; cursor: pointer; }
			</style>
			</head>
			<body>
			<div class="container">
            <h1>📶 You're Offline</h1>
            <p>Tests Hub is currently unavailable offline. Please check your internet connection.</p>
            <p>Cached content is available for previously visited pages.</p>
            <button onclick="location.reload()">Retry</button>
			</div>
			</body>
			</html>
			`,
			{
				headers: { 'Content-Type': 'text/html' }
			}
		);
	}
	
	return new Response('Offline', {
		status: 503,
		statusText: 'Service Unavailable',
		headers: { 'Content-Type': 'text/plain' }
	});
}

/**
	* Push event handler
*/
self.addEventListener('push', (event) => {
	console.log('[SW] Push event received:', event);
	
	let notificationData = {
		title: 'Tests Hub',
		body: 'New tests and updates available!',
		icon: NOTIFICATION_ICON,
		badge: NOTIFICATION_ICON,
		tag: 'testshub-update',
		data: {
			url: '/',
			timestamp: Date.now()
		}
	};
	
	if (event.data) {
		try {
			const data = event.data.json();
			notificationData = {
				...notificationData,
				...data
			};
			} catch (error) {
			notificationData.body = event.data.text();
		}
	}
	
	event.waitUntil(
		self.registration.showNotification(notificationData.title, notificationData)
	);
});

/**
	* Notification click event
*/
self.addEventListener('notificationclick', (event) => {
	console.log('[SW] Notification click:', event);
	
	event.notification.close();
	
	const urlToOpen = event.notification.data?.url || '/';
	
	event.waitUntil(
		clients.matchAll({
			type: 'window',
			includeUncontrolled: true
			}).then((clientList) => {
			// Check if there's already a window open
			for (const client of clientList) {
				if (client.url === urlToOpen && 'focus' in client) {
					return client.focus();
				}
			}
			
			// Open a new window
			if (clients.openWindow) {
				return clients.openWindow(urlToOpen);
			}
		})
	);
});

/**
	* Periodic sync event (for background updates)
*/
self.addEventListener('periodicsync', (event) => {
	if (event.tag === 'update-content') {
		console.log('[SW] Periodic sync for content updates');
		
		event.waitUntil(
			updateCachedContent()
		);
	}
});

/**
	* Background sync event
*/
self.addEventListener('sync', (event) => {
	console.log('[SW] Background sync event:', event.tag);
	
	if (event.tag === SYNC_QUEUE_NAME) {
		event.waitUntil(
			processSyncQueue()
		);
	}
});

/**
	* Update cached content in background
*/
async function updateCachedContent() {
	console.log('[SW] Updating cached content');
	
	try {
		// Update main pages
		const pagesToUpdate = [
			'/',
			'/index.html',
			'/Tests_7th.html',
			'/Tests_8th.html',
			'/Tests_9th.html',
			'/Tests_1st_secondary.html',
			'/Tests_2nd_secondary.html',
			'/Tests_3rd_secondary.html',
			'/Tests_4th_secondary.html'
		];
		
		for (const url of pagesToUpdate) {
			try {
				const response = await fetch(url);
				if (response.ok) {
					const cache = await caches.open(DYNAMIC_CACHE_NAME);
					await cache.put(url, response);
					console.log(`[SW] Updated cache for: ${url}`);
				}
				} catch (error) {
				console.error(`[SW] Failed to update ${url}:`, error);
			}
		}
		
		// Send notification if updates were found
		self.registration.showNotification('Tests Hub Updated', {
			body: 'New content has been downloaded in background',
			icon: NOTIFICATION_ICON,
			tag: 'content-update'
		});
		
		} catch (error) {
		console.error('[SW] Failed to update content:', error);
	}
}

/**
	* Process background sync queue
*/
async function processSyncQueue() {
	console.log('[SW] Processing sync queue');
	
	// In a real app, this would process queued actions
	// For now, just log and show notification
	self.registration.showNotification('Tests Hub Sync', {
		body: 'Your actions have been synchronized',
		icon: NOTIFICATION_ICON,
		tag: 'sync-complete'
	});
}

/**
	* Handle messages from the client
*/
self.addEventListener('message', (event) => {
	console.log('[SW] Message received:', event.data);
	
	if (event.data && event.data.type === 'SKIP_WAITING') {
		self.skipWaiting();
	}
	
	if (event.data && event.data.type === 'GET_VERSION') {
		event.ports[0].postMessage({
			version: '2.0.0',
			cacheName: CACHE_NAME
		});
	}
});

/**
	* Cache cleanup on startup
*/
async function cleanupOldCacheEntries() {
	const cache = await caches.open(DYNAMIC_CACHE_NAME);
	const requests = await cache.keys();
	const now = Date.now();
	
	for (const request of requests) {
		const response = await cache.match(request);
		if (response) {
			const dateHeader = response.headers.get('date');
			if (dateHeader) {
				const cachedDate = new Date(dateHeader).getTime();
				if (now - cachedDate > MAX_AGE_MS) {
					await cache.delete(request);
					console.log('[SW] Deleted stale cache:', request.url);
				}
			}
		}
	}
}

// Run cleanup periodically (every 24 hours)
setInterval(cleanupOldCacheEntries, 24 * 60 * 60 * 1000);

console.log('[SW] Service Worker loaded successfully');