import React from 'react'
import PropTypes from 'prop-types'
import Tag from './Tag'

const PostCard = ({ post, sectioned, isTag }) => {
    const url = `/${post.slug}/`
    return (
        <div  className= {`post-card post-card-${isTag}`}>
        <a href={`${url}`}>
            <header className="post-card-header">
                {post.feature_image &&
                    <div className="post-card-image" style={{
                        backgroundImage: `url(${post.feature_image})`,
                        backgroundSize: '100% 100%',
                    }}>
                        {post.tags && <div className="post-card-tags" style={sectioned ? { marginTop: `0px`, paddingLeft: `25px`, paddingTop: `25px`, display: `flex`, flexWrap: `wrap` } : { paddingLeft: `25px`, paddingTop: `25px`, display: `flex`, flexWrap: `wrap` }}><Tag post={post}/></div>}
                        <div style={{ position: `relative`, bottom: `calc(100%/-2)` }}>
                            <h2 style={{ backgroundColor: `black`, color: `white`, paddingRight: `15px`, width: `80%`, margin: `auto` }} className="post-card-title">{isTag ? post.name : post.title}</h2>
                        </div>
                    </div>}
            </header>
        </a>
        </div>
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
    sectioned: PropTypes.bool,
    isTag: PropTypes.bool,
}

export default PostCard
