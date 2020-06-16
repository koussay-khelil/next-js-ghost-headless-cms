import React from 'react'
import Picks from './Picks'
import TrendingList from './TrendingList'
import HyperPost from './HyperPost'
import PostCard from './PostCard'

const Feed = ({ posts, trends }) => (
    <div style={{paddingTop: '4vw'}}>
        <div className="tag-holder-feed">
             <section className="post-feed">
                {posts && posts.slice(0, 5).map( post => (
                // The tag below includes the markup for each post - components/common/PostCard.js
                    <Picks post={post} />
                ))}
            </section>
            <div style={{ textAlign: `center` }}>
                <div style={{ marginBottom: `35px` }}>
                    <TrendingList posts={trends}/>
                </div>
                <span style={{ fontWeight: `bold`, paddingTop: `25px` }}>Find Us On Facebook</span>
                <div>
                <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fgomycode&tabs&width=340&height=214&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=642599346290535" className="facebook-frame" height={214} style={{ border: `none`, overflow: `hidden`, paddingTop: `25px` }} scrolling="no" frameBorder={0} allow="encrypted-media" />
                </div>
            </div>
            </div>
            <section className="hyper-post">
            <HyperPost post={posts[6]} />
        </section>
        <section className="more-posts" style={{ paddingTop: `50px` }}>
            {posts && posts.slice(7, 16).map(post => (
            // The tag below includes the markup for each post - components/common/PostCard.js
                <PostCard sectioned key={post.id} post={post} />
            ))}
        </section>
            <div style={{ paddingBottom: `25px` }}>
        <a href="/more" style={{ display: `flex`, margin: `auto`, width: `45%`, paddingTop: `40px` }}>
            <div style={{ width: `100%` }}>
                <div style={{ backgroundColor: `black`, color: `white`, textAlign: `center`, padding: `15px` }}>
                        More Posts
                </div>
            </div>
        </a>
        </div>
        </div>
)

export default Feed
