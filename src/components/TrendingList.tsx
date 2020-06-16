import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link';

const TrendingList = ({ posts }) => (
    <>
        <div style={{ border: `1px solid #DDDDDD`, textAlign: `left` }}>
            <div style={{ padding: `20px` }}>
                <div style={{ width: `100%`, borderBottom: `1px solid #28AAFF`, marginBottom: `10px` }}>
                    <span style={{ backgroundColor: `#28AAFF`, color: `white`, paddingBottom: `4px`, fontWeight: `bold`, paddingRight: `2px` }}>
                      Trending
                    </span>
                </div>
                {posts.slice(0,5).map((post, index) => (<div key={index} style={{ display: `flex` }}><div style={{ color: `#28AAFF`, marginRight: `8px`, fontSize: `24px`, fontWeight: `bold` }}> {index + 1}</div><a href={`/` + post.slug} style={{ color: `inherit` }}>{post.title}</a></div>))}
            </div>
        </div>
    </>
)

TrendingList.propTypes = {
    posts: PropTypes.any.isRequired,
}

export default TrendingList
