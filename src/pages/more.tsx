import React, {useState} from 'react'
import Head from 'next/head';
import PostCard from '../components/PostCard'
import Layout from '../layouts/Layout'
import {getTagPosts, getNavPosts} from "../api/ghost";
import Pagination from '../components/Pagination';


const More = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(12);
    const posts = props.posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const numberOfPages = Math.ceil(posts.length / postsPerPage)
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <>
            <Head>
                <title>More Posts</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <meta name="google-site-verification" content="4KrMxwW8b-wV-E_ZFUik1eIPWqws5plGoCO3aQ4GBds" />
                <meta property="og:image" content="http://52.142.121.205/content/images/2020/05/cover--6-.jpg"/><meta property="og:image:width" content="1600"/><meta property="og:image:height" content="800"/>
            </Head>
            <Layout navData={props.navData} isLink>
                <div className="container">
                    <section className="more-posts" style={{ paddingTop: `50px` }}>
                        {currentPosts.map(post => (
                            // The tag below includes the markup for each post - components/common/PostCard.js
                            <PostCard sectioned key={post.id} post={post} />
                        ))}
                    </section>
                    <Pagination
                        currentPage={currentPage}
                        numberOfPages={numberOfPages}
                        postsPerPage={postsPerPage}
                        totalPosts={posts.length}
                        paginate={paginate}
                    />
                </div>
            </Layout>
        </>
    )
}

More.getInitialProps = async () => {
    return {
        posts: await getTagPosts(),
        navData: await getNavPosts(),
    }
}
export default More
