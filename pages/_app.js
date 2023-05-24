import "primereact/resources/themes/lara-dark-purple/theme.css";   //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import "primeflex/primeflex.css";
import '../styles/globals.css';
import Script from "next/script";

import PrimeReact from 'primereact/api';

PrimeReact.ripple = true;

function MyApp({ Component, pageProps }) {
  return <>
    <Script
      strategy="lazyOnload"
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
    />
    <Script id="GoogleAnalytics" strategy="lazyOnload">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
      `}
    </Script>
    <Component {...pageProps} />
  </>
}

export default MyApp
