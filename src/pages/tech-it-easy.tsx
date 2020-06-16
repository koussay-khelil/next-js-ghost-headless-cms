import React, {useState} from 'react'
import Head from 'next/head';
import DefaultLayout from '@layouts/Layout';
import PostCard from '../components/PostCard';
import HyperPost from '../components/HyperPost';
import Pagination from '../components/Pagination';
import '../sass/main.scss';
import {getTagPosts, getNavPosts} from "../api/ghost";

/**
 * Tag page (/tag/:slug)
 *
 * Loads all posts for the requested tag incl. pagination.
 *
 */
const Tag = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(13);
    const myPosts = data => data.filter(post => (post.tags.map(tag => tag.name === 'tech it easy').includes(true)));
    const posts = props.posts &&  myPosts(props.posts);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const numberOfPages = Math.ceil(posts.length / postsPerPage);
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <>
            <Head>
                <title>Tech it easy</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <meta name="google-site-verification" content="4KrMxwW8b-wV-E_ZFUik1eIPWqws5plGoCO3aQ4GBds" />
                <meta property="og:image" content="http://52.142.121.205/content/images/2020/05/cover--6-.jpg"/><meta property="og:image:width" content="1600"/><meta property="og:image:height" content="800"/>
            </Head>
            <DefaultLayout navData={props.navData} isLink>
                <div className="container tag-posts-holder">
                    <section className="hyper-post">
                        {currentPosts.length !== 0 && <HyperPost post={currentPosts[0]} />}
                    </section>
                    <section className="more-posts" style={{ paddingTop: `50px` }}>
                        {currentPosts.length !== 0 && currentPosts.slice(1, currentPosts.length).map(post => (
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
            </DefaultLayout>
        </>
    )
}

Tag.getInitialProps = async () => {
    return {
        posts: await getTagPosts(),
        navData: await getNavPosts(),
    }
}

export default Tag
