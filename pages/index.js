import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Oscar Zhou" />
        <h1 className="description">
          Welcome to CONNECT+<code>pages/index.js</code>
        </h1>
      </main>
    <p className="description">
          <code>pages/index.js</code>
        </p>

      <Footer />
    </div>
  )
}
