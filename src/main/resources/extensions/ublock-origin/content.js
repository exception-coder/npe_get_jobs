// uBlock Origin content script
// Injected into all pages to provide extension detection fingerprint

(function() {
  'use strict';
  
  // Make extension detectable via standard methods
  // This helps pass anti-bot checks that look for extensions
  
  // Add extension marker that some sites check for
  if (!window.__ublock) {
    Object.defineProperty(window, '__ublock', {
      value: { version: '1.57.2' },
      writable: false,
      configurable: false
    });
  }
})();
