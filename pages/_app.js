import Head from 'next/head'
import { wrapper } from '../reducers/store'
import '../styles/globals.css'
import React, { useEffect } from 'react'

const MyApp = ({ Component, pageProps }) => {

  return <>
    <Head>
        <title>Latijn Trainer</title>
      </Head>
    <Component {...pageProps} />
  </>
}



export default wrapper.withRedux(MyApp)
