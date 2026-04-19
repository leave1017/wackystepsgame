'use client';

import Script from 'next/script';

export function NativeBannerAd() {
  return (
    <div className="my-6" aria-label="Advertisement">
      <div id="container-eceb53170fc094ec53339192f5df1cf8" />
      <Script
        id="native-banner-invoke"
        src="https://pl29169752.profitablecpmratenetwork.com/eceb53170fc094ec53339192f5df1cf8/invoke.js"
        strategy="afterInteractive"
        data-cfasync="false"
      />
    </div>
  );
}
