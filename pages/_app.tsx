import type { AppProps } from 'next/app'

import 'antd/dist/antd.css';
import '../components/editorversion3/quill.imageUploader.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
 
  <Component {...pageProps} />
  
  
  )
}
export default MyApp
