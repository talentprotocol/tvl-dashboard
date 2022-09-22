import "primereact/resources/themes/lara-dark-purple/theme.css";   //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import "primeflex/primeflex.css";
import '../styles/globals.css'

import PrimeReact from 'primereact/api';

PrimeReact.ripple = true;

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
