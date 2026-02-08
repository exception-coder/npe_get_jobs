// uBlock Origin background service worker
// This extension helps bypass anti-bot detection by providing a real extension fingerprint

console.log('[uBlock Origin] Background service worker started');

// Listen for extension installation
chrome.runtime.onInstalled.addListener((details) => {
  console.log('[uBlock Origin] Extension installed:', details.reason);
});

// Keep the service worker alive
setInterval(() => {
  // Heartbeat to keep the extension active
}, 30000);
