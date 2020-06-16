import React from 'react'
import PropTypes from 'prop-types'
import {getPosts} from '../api/ghost';
import Header from './Header'
import Footer from '@layouts/Footer';
import Tag from '../components/Tag'
import moment from 'moment';
// Styles
import '../sass/main.scss'

/**
 * Main layout component
 *
 * The Layout component wraps around each page and template.
 * It also provides the header, footer as well as the main
 * styles, and meta data for each page.
 *
 */
const DefaultLayout = ({children, isTag, tagImage, latestFeatured, postClass, isHome, isLink, navData}) => {
    return (
        <React.Fragment>
            <div className="viewport">
                <div className="viewport-top">
                    {/* The main header section on top of the screen */}
                    {isLink && latestFeatured ?
                        <header className="site-head"
                                style={isTag && latestFeatured ? {backgroundImage: `url(${latestFeatured.feature_image})`} : isTag && !latestFeatured ? {backgroundImage: `url(${tagImage})`} : {backgroundImage: `url('https://www.beautycolorcode.com/000000-1280x1024.png')`}}>
                            <div className="container">
                                <nav className="site-nav">
                                    <Header posts={navData} />
                                </nav>
                            </div>
                                {isTag && latestFeatured ?
                                    <a href={`/${latestFeatured.slug}`}>
                                        <div className="site-banner" style={{
                                            height: `85vh`,
                                            padding: `0px`,
                                            display: `flex`,
                                            alignItems: `flex-end`,
                                        }}>
                                            <div>
                                                {latestFeatured.tags &&
                                                <div className={`post-card-tags headline-tag-true`}><Tag
                                                    post={latestFeatured}/>
                                                </div>}
                                                <div>
                                                    <h2 className={`post-card-title headline-title-true`}>{latestFeatured.title}</h2>
                                                </div>
                                                <br/>
                                                <footer className={`post-card-footer headline-footer-true`}>
                                                    <div className="post-card-footer-left" style={{

                                                        color: `white`,
                                                        backgroundColor: `black`,
                                                        paddingRight: `20px`,
                                                    }}>
                                                        <span>{latestFeatured.published_at_pretty}</span> &nbsp;
                                                        by &nbsp;
                                                        <span
                                                            style={{color: `#28AAFF`}}>{latestFeatured.primary_author.name}</span>

                                                    </div>
                                                    <div className="post-card-footer-right">
                                                    </div>
                                                </footer>
                                            </div>
                                        </div>
                                    </a> :
                                    isTag ?
                                        <div className="site-banner" style={{height: `85vh`}}>
                                            <h1 className="site-banner-title">r</h1>
                                            <p className="site-banner-desc">a</p>
                                        </div> : isHome && <div className="site-banner" style={{height: `55vh`}}>
                                        <h1 className="site-banner-title">z</h1>
                                        <p className="site-banner-desc">e</p>
                                    </div>}
                        </header> :
                        <header className="site-head"
                                style={isTag && latestFeatured ? {backgroundImage: `url(${latestFeatured.feature_image})`} : isTag && !latestFeatured ? {backgroundImage: `url(${tagImage})`} : {backgroundImage: `url('https://www.beautycolorcode.com/000000-1280x1024.png')`}}>
                            <div className="container">
                                <nav className="site-nav">
                                    <Header posts={navData} />
                                </nav>
                            </div>
                            {isTag && latestFeatured ?

                                        <div className="site-banner"
                                             style={{
                                                 height: `85vh`,
                                                 padding: `0px`,
                                                 display: `flex`,
                                                 alignItems: `flex-end`
                                             }}>
                                            <div>
                                                {latestFeatured.tags &&
                                                <div className={`post-card-tags headline-tag-true`}><Tag
                                                    post={latestFeatured}/>
                                                </div>}
                                                <div>
                                                    <h2 className={`post-card-title headline-title-true`}>{latestFeatured.title}</h2>
                                                </div>
                                                <br/>
                                                <footer className={`post-card-footer headline-footer-true`}>
                                                    <div className="post-card-footer-left" style={{

                                                        color: `white`,
                                                        backgroundColor: `black`,
                                                        paddingRight: `20px`,
                                                    }}>
                                                        <span>{moment(latestFeatured.published_at).format("MMM D, YYYY")}</span> &nbsp;
                                                        by &nbsp;
                                                        <span
                                                            style={{color: `#28AAFF`}}>{latestFeatured.primary_author.name}</span>

                                                    </div>
                                                    <div className="post-card-footer-right">
                                                    </div>
                                                </footer>
                                            </div>
                                        </div>
                                    :
                                isTag ?
                                    <div className="site-banner" style={{height: `85vh`}}>
                                        <h1 className="site-banner-title">r</h1>
                                        <p className="site-banner-desc">a</p>
                                    </div> : isHome && <div className="site-banner" style={{height: `55vh`}}>
                                    <h1 className="site-banner-title">z</h1>
                                    <p className="site-banner-desc">e</p>
                                </div>}
                        </header>}
                    <main className={`site-main` + ` ` + `${postClass}`}>
                        {/* All the main content gets inserted here, index.js, post.js */}
                        {children}
                    </main>
                </div>
                <Footer/>
            </div>
        </React.Fragment>
    )
};

DefaultLayout.getInitialProps = async () => {
    return {
        posts: await getPosts(),
    }
};


DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
    isHome: PropTypes.bool,
    isTag: PropTypes.bool,
    tagImage: PropTypes.string,
    isPost: PropTypes.bool,
    isLink: PropTypes.bool,
    postClass: PropTypes.string,
    latestFeatured: PropTypes.any,
    navData: PropTypes.any,
};
DefaultLayout.defaultProps = {
    isPost: false,
};


export default DefaultLayout
