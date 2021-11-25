import Head from 'next/head'
import Header from '../components/Header'
import Main from '../components/Main'

export default function Home() {

  

  return (
    <div className="">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header/>
      {/* Main */}
      <Main/>
      {/* Footer */}
    </div>
  )
}
