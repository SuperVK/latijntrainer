import Head from 'next/head'
import { wrapper } from '../reducers/store'
import { Workbox } from 'workbox-window'
import '../styles/globals.css'
import React from 'react'

class MyApp extends React.Component {
  render() {
    return <>
      <Head>
          <title>Latijn Trainer</title>
        </Head>
      <this.props.Component {...this.props.pageProps} />
    </>
  }

}


export default wrapper.withRedux(MyApp)
