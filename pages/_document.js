import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
	render() {
		return (
			<Html style={{ background: '#EEE', color: '#444' }}>
				<Head>

					<link rel="manifest" href="/manifest.json" />
					<link rel="icon" href="/favicon.ico" />
					<link
						rel="stylesheet"
						href="https://code.getmdl.io/1.3.0/material.deep_purple-blue.min.css"
					/>
					<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" type="text/css"></link>
                    <meta name='theme-color' content='#000000'/>
				</Head>
				<body>
					<Main />
					<NextScript />
					<script defer src="https://code.getmdl.io/1.3.0/material.min.js" />
				</body>
			</Html>
		)
	}
}