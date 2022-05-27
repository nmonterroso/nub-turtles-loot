import Head from 'next/head'
import '../src/global.css'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>PURPLES</title>
      </Head>
      <script dangerouslySetInnerHTML={{__html: `const whTooltips = {colorLinks: true, iconizeLinks: true, renameLinks: true, iconSize: "small"}`}} />
      <script src="https://wow.zamimg.com/widgets/power.js" />
      <Component {...pageProps} />
    </>
  )
}

export default App
