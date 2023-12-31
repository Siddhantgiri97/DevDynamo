import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import NavBar from './components/navbar'
import Footer from './components/footer'
config.autoAddCss = false
export default function App({ Component, pageProps }) {
  return <>
    <NavBar />
    <Component {...pageProps} />
    <Footer />
  </>
}
