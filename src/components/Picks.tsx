import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link';
import Tag from './Tag'
import moment from 'moment';
const PostCard = ({ post }) => {
    const url = `/${post.slug}/`
    return (
            <a href={`${url}`}>
            <header className="post-card-header">
                {post && post.feature_image &&
                    <div className="post-card-image pick-image" style={{
                        backgroundImage: `url(${post.feature_image})`
                    }}>
                        <div className="the-picks">
                            {post && post.tags && <div className="post-card-tags headline-tag-true"> <Tag post={post} /> </div>}
                            <div>
                                <h2 className={`post-card-title headline-title-false`}>{post.title}</h2>
                            </div>
                            <br/>
                            <footer className={`post-card-footer headline-footer-true`} >
                                <div className="post-card-footer-left" style={{  color: `white`, backgroundColor: `black`, paddingRight: `20px` }}>
                                    <span>{moment(post.published_at).format("MMM D, YYYY")}</span> &nbsp;
                                    by &nbsp;
                                    <span style={{ color: `#28AAFF` }}>{ post.primary_author.name }</span>

                                </div>
                                <div className="post-card-footer-right">
                                </div>
                            </footer>
                        </div>
                    </div>}

            </header>
            </a>
    )
}

PostCard.propTypes = {
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

export default PostCard
