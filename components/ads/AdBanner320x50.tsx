'use client';

import Script from 'next/script';

export function AdBanner320x50() {
  return (
    <div className="flex justify-center my-4" aria-label="Advertisement">
      <div style={{ width: 320, height: 50, overflow: 'hidden' }}>
        <Script
          id="at-options-banner-320"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.atOptions = {
                'key': 'c9d693759c06330eab3623223090616d',
                'format': 'iframe',
                'height': 50,
                'width': 320,
                'params': {}
              };
            `
          }}
        />
        <Script
          id="at-invoke-banner-320"
          src="https://www.highperformanceformat.com/c9d693759c06330eab3623223090616d/invoke.js"
          strategy="afterInteractive"
        />
      </div>
    </div>
  );
}
