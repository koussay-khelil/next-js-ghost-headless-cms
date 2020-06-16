import React from "react";
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router'
import '../sass/main.scss';
import { getSinglePost, getReducedPosts, getNavPosts } from 'src/api/ghost';
import DefaultLayout from '@layouts/Layout';
import PostCard from '../components/PostCard'
import TrendingList from '../components/TrendingList'
import ArticleMeta from '../components/meta/ArticleMeta'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import { FacebookShareButton, TwitterShareButton } from 'react-share'

const PostPage = (props) => {
  const { post, posts } = props;
    const route = useRouter()
  if(!post) {
    return null;
  }
    const Trends = data => data.filter(post => (post.tags.map(tag => tag.name === `#Trending`)).length !== 1);
    const Featured = data => data.filter(post => post.featured === true);
    const ourPicks = posts && Featured(posts);
    const trends = posts && Trends(posts);
  return (
    <div>
        <ArticleMeta
            data={post}
        />
      <DefaultLayout isTag isPost latestFeatured={props.post} postClass="post" navData={props.navData} >
                <div className="container tag-holder-feed" style={{paddingTop: '4vw'}}>
                    <article className="content">
                        <section className="post-full-content">
                            {/* The main post content */ }
                            <section
                                className="content-body load-external-scripts"
                                dangerouslySetInnerHTML={{ __html: post.html }}
                            />
                        </section>
                    </article>
                    <div style={{ textAlign: `center` }}>
                        <div style={{ paddingBottom: `35px`, display: `flex`, justifyContent: `end` }}>
                          { route.asPath  &&  <FacebookShareButton url={`gomytech.gomycode.co/${post.slug}`} className="button is-outlined is-rounded facebook" style={{ paddingRight: `20px` }} title={post.title}  >
                                <span className="icon">
                                    <FacebookIcon className="site-nav-icon" style={{ fontSize: `56px`, color: `#28AAFF` }} />
                                </span>
                            </FacebookShareButton>}
                           { route.asPath &&  <TwitterShareButton url={`gomytech.gomycode.co${route.asPath}`} className="button is-outlined is-rounded twitter" title={post.title}>
                                <span className="icon">
                                    <TwitterIcon className="site-nav-icon" style={{ fontSize: `56px`, color: `#28AAFF` }} />
                                </span>
                            </TwitterShareButton>}
                        </div>
                    <div style={{ marginBottom: `35px` }}>
                            <TrendingList posts={trends}/>
                        </div>
                        <span style={{ fontWeight: `bold` }}> Our Picks</span>
                        <div style={{ textAlign: `initial` }}>
                            {ourPicks.slice(0, 3).map(post => (
                            // The tag below includes the markup for each post - components/common/PostCard.js
                                <PostCard sectioned key={post.id} post={post} isTag />
                            ))}
                            </div>
                        <div style={{ display: `flex`, flexDirection: `column`, paddingTop: `25px` }}>
                            <span style={{ fontWeight: `bold` }}>Find Us On Facebook</span>
                            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fgomycode&tabs&width=340&height=214&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=642599346290535" className="facebook-frame" height={214} style={{ border: `none`, overflow: `hidden`, paddingTop: `25px` }} scrolling="no" frameBorder={0} allow="encrypted-media" />
                        </div>
                    </div>
                </div>
            </DefaultLayout>
    </div >
  )
}

PostPage.getInitialProps = async (params) => {
    return {
        posts: await getReducedPosts(),
        post: await getSinglePost(params.query.slug),
        navData: await getNavPosts(),
    }
};

export default PostPage;
