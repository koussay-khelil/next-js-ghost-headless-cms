import React from 'react';
import {Helmet} from "react-helmet";
import Head from 'next/head';
import PropTypes from 'prop-types'

const shareImageWidth= 1000;
const shareImageHeight= 523;
const ImageMeta = ({ image }) => {
    if (!image) {
        return null
    }

    return (
        <Head>
            <meta name="google-site-verification" content="4KrMxwW8b-wV-E_ZFUik1eIPWqws5plGoCO3aQ4GBds" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={image} />
            <meta key="og:image" property="og:image" content={image} />
            <meta property="og:image:width" content={shareImageWidth} />
            <meta property="og:image:height" content={shareImageHeight} />
        </Head >
    )
}

ImageMeta.propTypes = {
    image: PropTypes.string,
}

export default ImageMeta
