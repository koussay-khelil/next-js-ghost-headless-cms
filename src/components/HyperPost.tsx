import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link';
import Tag from './Tag'
const HyperPost = ({ post }) => {
    const url = `/${post.slug}/`
    // const readingTime = readingTimeHelper(post)
    return (
        <a href={`${url}`} className="post-card">
            <header className="site-head" style={{ backgroundImage: `url(${post.feature_image})`}}>
                <div className="site-banner" style={{ height: `65vh`, padding: `0px`, display: `flex`, alignItems: `flex-end` }}>
                    <div>
                        {post.tags && <div className={`post-card-tags headline-tag-true`}> <Tag post={post} /> </div>}
                        <div>
                            <h2 className={`post-card-title headline-title-true`}>{post.title}</h2>
                        </div>
                    </div>
                </div>
            </header>
        </a>
    )
}

HyperPost.propTypes = {
    post: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        feature_image: PropTypes.string,
        featured: PropTypes.bool,
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
            })
        ),
        excerpt: PropTypes.string.isRequired,
        primary_author: PropTypes.shape({
            name: PropTypes.string.isRequired,
            profile_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
}

export default HyperPost
