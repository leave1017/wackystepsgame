'use client';

import { useEffect, useRef } from 'react';

export function NativeBannerAd() {
  const containerRef = useRef<HTMLDivElement>(null);
  const injected = useRef(false);

  useEffect(() => {
    if (injected.current || !containerRef.current) return;
    injected.current = true;

    const script = document.createElement('script');
    script.src = 'https://pl29169752.profitablecpmratenetwork.com/eceb53170fc094ec53339192f5df1cf8/invoke.js';
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    document.head.appendChild(script);
  }, []);

  return (
    <div className="my-6" aria-label="Advertisement">
      <div
        ref={containerRef}
        id="container-eceb53170fc094ec53339192f5df1cf8"
      />
    </div>
  );
}
