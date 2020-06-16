import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from "react";
class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head lang="fr">
                    <link rel="icon" type="image/x-icon" sizes="32x32" href="https://i.imgur.com/O0hn29c.png" />
                    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                    <meta name="google-site-verification" content="4KrMxwW8b-wV-E_ZFUik1eIPWqws5plGoCO3aQ4GBds" />
                    <meta property="og:image" content="http://52.142.121.205/content/images/2020/05/cover--6-.jpg"/><meta property="og:image:width" content="1600"/><meta property="og:image:height" content="800"/>
                </Head>
                <title>GoMyTech</title>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
