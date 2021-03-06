import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'


export default class MyDocument extends Document {
	render() {
		return (
			<Html style={{ background: '#ffffff', color: '#000000' }}>
				<Head>
					<link rel="manifest" href="/manifest.json" />
					<link rel="icon" href="/favicon.ico" />
					<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" type="text/css"></link>
					<link rel="apple-touch-icon" href="/icons/192.png"/>
                    <meta name='theme-color' content='#673ab7'/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}