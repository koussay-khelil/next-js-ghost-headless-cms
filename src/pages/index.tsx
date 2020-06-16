import React from 'react'
import '../sass/main.scss';
import {getMostPosts, getNavPosts} from '../api/ghost';
import DefaultLayout from '@layouts/Layout';
import Feed from '../components/Feed'

const Trends =  data => data.filter(post => (post.tags.map(tag => tag.name === `#Trending`).includes(true)))
const Home = (props: HomeProps) => {
    const trends = props.posts && Trends(props.posts)
    const featured = props.posts && props.posts.filter(post => post.featured === true)
    const latestFeatured = featured && featured[0]
        return (
        <React.Fragment>
           <DefaultLayout isTag isLink latestFeatured={latestFeatured && latestFeatured} navData={props.navPosts && props.navPosts}>
           <div className="container">
                    <Feed posts={props.posts} trends={trends} />
                </div>
            </DefaultLayout>
            </React.Fragment>
    )
};

Home.getInitialProps = async () => {
    return {
        posts : await getMostPosts(),
        navPosts: await getNavPosts()
     }
}

export default Home;

interface HomeProps {
    posts: any;
    navPosts: any;
}
