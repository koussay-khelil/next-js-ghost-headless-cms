import React from 'react'
import Head from 'next/head';
import PropTypes from 'prop-types'
import ImageMeta from './ImageMeta'
import getAuthorProperties from './getAuthorProperties'


const ArticleMetaGhost = ({ data }) => {
    const ghostPost = data
    const author = getAuthorProperties(ghostPost.primary_author)
    const publicTags = data.tags.map(tag => tag.name)
    const primaryTag = publicTags[1] || ``
    const shareImage = ghostPost.feature_image
    const jsonLd = {
        "@context": `https://schema.org/`,
        "@type": `Article`,
        author: {
            "@type": `Person`,
            name: author.name,
            image: author.image ? author.image : undefined,
            sameAs: author.sameAsArray ? author.sameAsArray : undefined,
        },
        keywords: publicTags.length ? publicTags.join(`, `) : undefined,
        headline: ghostPost.meta_title || ghostPost.title,
        datePublished: ghostPost.published_at,
        dateModified: ghostPost.updated_at,
        image: ghostPost.feature_image,
        publisher: {
            "@type": `Organization`,
            name: 'Gomytech',
        },
        description: ghostPost.meta_description || ghostPost.excerpt,
        mainEntityOfPage: {
            "@type": `WebPage`,
            "@id": 'www.gomytech.gomycode.co',
        },
    }
    return (
        <>
            <Head>
                <title>{ghostPost.title}</title>
                <meta name="google-site-verification" content="4KrMxwW8b-wV-E_ZFUik1eIPWqws5plGoCO3aQ4GBds" />
                <meta name="description" content={ghostPost.meta_description || ghostPost.excerpt} />
                <link rel="canonical" href={ghostPost.slug} />
                <meta property="og:type" content="article" />
                <meta property="og:title"
                    content={
                        ghostPost.title
                    }
                />
                <meta property="og:description"
                    content={
                        ghostPost.excerpt
                    }
                />
                <meta property="og:url" content={`https://gomytech.gomycode.co/${ghostPost.slug}`}  />
                <meta property="og:image" content={ghostPost.feature_image}  />
                <meta property="og:image:width" content="1600" />
                <meta property="og:image:height" content="800" />
                <meta property="article:published_time" content={ghostPost.published_at} />
                <meta property="article:modified_time" content={ghostPost.updated_at} />
                {publicTags.map((keyword, i) => (<meta property="article:tag" content={keyword} key={i} />))}
                {author.facebookUrl && <meta property="article:author" content={author.facebookUrl} />}

                <meta name="twitter:title"
                    content={
                        ghostPost.title
                    }
                />
                <meta name="twitter:description"
                    content={
                        ghostPost.excerpt
                    }
                />
                <meta name="twitter:url" content='@gomycode'  />
                <meta name="twitter:label1" content="Written by" />
                <meta name="twitter:data1" content={author.name} />
                {primaryTag && <meta name="twitter:label2" content="Filed under" />}
                {primaryTag && <meta name="twitter:data2" content={primaryTag} />}
                <script type="application/ld+json">{JSON.stringify(jsonLd, undefined, 4)}</script>
            </Head>
            <ImageMeta image={shareImage} />
        </>
    )
}

ArticleMetaGhost.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        published_at: PropTypes.string.isRequired,
        updated_at: PropTypes.string.isRequired,
        meta_title: PropTypes.string,
        meta_description: PropTypes.string,
        primary_author: PropTypes.object.isRequired,
        feature_image: PropTypes.string,
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
                slug: PropTypes.string,
                visibility: PropTypes.string,
            })
        ),
        primaryTag: PropTypes.shape({
            name: PropTypes.string,
        }),
        og_title: PropTypes.string,
        og_description: PropTypes.string,
        twitter_title: PropTypes.string,
        twitter_description: PropTypes.string,
        excerpt: PropTypes.string.isRequired,
    }).isRequired
}

export default ArticleMetaGhost
