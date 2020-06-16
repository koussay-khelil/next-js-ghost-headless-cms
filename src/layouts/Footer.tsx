import React from 'react'
import PropTypes from 'prop-types'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'
import '../sass/main.scss'

const Footer = () => {
    React.useEffect(() => {
        const script = document.createElement(`script`)
        script.src = `https://js.hsforms.net/forms/v2.js`
        script.async = true
        // form.style.backgroundColor = `blue`
        document.body.appendChild(script)
        var form = document.getElementsByClassName(`hs_email`)
        script.addEventListener(`load`, () => {
                // @ts-ignore
            hbspt.forms.create({
                portalId: `6957122`,
                formId: `48d5edc1-a63d-4f37-a561-eb34540b232b`,
                target: `#hubspotForm`,
            })
        })
    }, [])
    return (
        <div className="viewport-bottom" style={{ backgroundColor: `#000000` }}>
            <footer className="footer container">
                <div className="footer__addr">
                    <div className="footer__logo"><img style={{ borderRadius: 0, width: `40%`, height: `auto` }} src={`https://i.imgur.com/hZS6Bp9.png`} alt="Gomytech" /></div>
                    <p className='footer-paragraph'>
                        GoMyTech est la nouvelle plateforme médiatique de GoMyCode. Celle-ci se veut être la nouvelle référence de l’actualité et des nouveautés tech en Tunisie et dans le monde.
                    </p>
                     <div className="site-mast-right">
                        <a href={ `https://www.facebook.com/gomycode` } className="site-nav-item" target="_blank" rel="noopener noreferrer"><FacebookIcon className="site-nav-icon" style={{ fontSize: `24px` }} /> </a>
                        <a href={ `https://twitter.com/gomycode` } className="site-nav-item" target="_blank" rel="noopener noreferrer"><TwitterIcon style={{ fontSize: `24px` }} className="site-nav-icon" /></a>
                        <a className="site-nav-item" href={ `https://www.instagram.com/gomycode/` } target="_blank" rel="noopener noreferrer"><InstagramIcon style={{ fontSize: `24px` }} className="site-nav-icon" /></a>
                    </div>
                </div>
                <div className="footer__nav footer-responsive">
                    <div style={{ zIndex: 123456 }}>
                        <div className="nav__item" style={{ fontWeight: 900 }}>
                            <h2 className="nav__title"><a href={`/tech-it-easy`} style={{ color: `inherit` }}>Tech it easy</a></h2>
                        </div>      <div className="nav__item" style={{ fontWeight: 900 }}>
                        <h2 className="nav__title"><a href={`/inside-gomycode`} style={{ color: `inherit` }}>Inside GoMyCode</a></h2>
                        </div>      <div className="nav__item" style={{ fontWeight: 900 }}>
                        <h2 className="nav__title"><a href={`/meet-a-founder`} style={{ color: `inherit` }}>Meet a Founder</a></h2>
                        </div>      <div className="nav__item" style={{ fontWeight: 900 }}>
                        <h2 className="nav__title"><a href={`/en-profondeur`} style={{ color: `inherit` }}>En Profondeur</a></h2>
                        </div>
                    </div>
                    <div style={{ zIndex: 123456 }}>
                        <div className="nav__item" style={{ fontWeight: 900 }}>
                            <h2 className="nav__title"><a href={`/around-gomytech`}  style={{ color: `inherit` }}>Around GoMyTech</a></h2>
                        </div>      <div className="nav__item" style={{ fontWeight: 900 }}>
                        <h2 className="nav__title"><a href={`/random-mirror`} style={{ color: `inherit` }}>Random Mirror</a></h2>
                        </div>      <div className="nav__item" style={{ fontWeight: 900 }}>
                        <h2 className="nav__title"><a  href={`/blog`} style={{ color: `inherit` }}>Blog</a></h2>
                        </div>
                        <div className="nav__item" style={{ fontWeight: 900 }}>
                            <h2 className="nav__title"><a href="https://www.gomycode.co/a-propos" target="_blank" style={{ color: `inherit` }}> About</a></h2>
                        </div>
                    </div>
                </div>
                <div className="legal subscribe-field">
                    <address>
                        <span style={{ fontWeight: 900 }}> Newsletter </span><br />
                        <div className="footer-subscribe" id="hubspotForm">
                        </div>
                    </address>
                </div>
                <div style={{ display: `flex`, justifyContent: `space-between`, marginTop: `35px` }}>
                    <small>&copy; {new Date().getFullYear()} GoMyCode</small>
                    <small>Privacy Policy</small>
                </div>
            </footer>
        </div>
    )
}
Footer.propTypes = {
    site: PropTypes.object,
}
export default Footer
