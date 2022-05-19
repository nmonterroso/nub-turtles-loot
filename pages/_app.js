import Head from 'next/head'
import Script from 'next/script'
import '../src/global.css'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>PURPLES</title>
      </Head>
      <Script>
        {`const whTooltips = {colorLinks: true, iconizeLinks: true, renameLinks: true, iconSize: "small"}`}
      </Script>
      <Script src="https://wow.zamimg.com/widgets/power.js" />
      <Component {...pageProps} />
    </>
  )
}

export default App
