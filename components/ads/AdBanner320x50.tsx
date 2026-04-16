'use client';

import { useEffect, useRef } from 'react';

export function AdBanner320x50() {
  const containerRef = useRef<HTMLDivElement>(null);
  const injected = useRef(false);

  useEffect(() => {
    if (injected.current || !containerRef.current) return;
    injected.current = true;

    // Set atOptions on window
    (window as any).atOptions = {
      key: 'c9d693759c06330eab3623223090616d',
      format: 'iframe',
      height: 50,
      width: 320,
      params: {},
    };

    const script = document.createElement('script');
    script.src = 'https://www.highperformanceformat.com/c9d693759c06330eab3623223090616d/invoke.js';
    script.async = true;
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="flex justify-center my-4" aria-label="Advertisement">
      <div ref={containerRef} style={{ width: 320, height: 50, overflow: 'hidden' }} />
    </div>
  );
}
