import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import Drawer from '@material-ui/core/Drawer'
import CloseIcon from '@material-ui/icons/Close'
import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'
import Slide from '@material-ui/core/Slide'
import '../sass/main.scss'




export default function Header(props) {
    const [open, setOpen] = React.useState(false);
    const pageNames = props.posts && props.posts.map(page => page.title);
    const [pages, setPages] = React.useState(pageNames);
    const [checked, setChecked] = React.useState(false);
    const [checkedResponsive, setCheckedResponsive] = React.useState(false);
    const getPosition = (string, subString, index) => string.split(subString, index).join(subString).length;
    const pageUrl = props.posts && props.posts.map(page => page.url.substring(getPosition(page.url, `/`, 3)));
    const result = pageNames && pageNames.reduce((o, k, i) => {
        return { ...o, [k]: pageUrl[i] }
    }, {});
    const handleDrawerOpen = () => {
        setOpen(true)
    };

    const handleDrawerClose = () => {
        setOpen(false)
    };

    const changePath = (event) => {
        result[event] !== undefined ? (window.location = result[event]) : ``
    };
    const handleChange = () => {
        setChecked(prev => !prev)
    };
    const handleChangeResponsive = () => {
        setCheckedResponsive(prev => !prev)
    };
    const useOutsideAlerter = (ref) => {
        React.useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setChecked(false)
                }
            }
            document.addEventListener(`mousedown`, handleClickOutside)
            return () => {
                document.removeEventListener(`mousedown`, handleClickOutside)
            }
        }, [ref])
    };
    const useOutsideAlerterResponsive = (refresponsive) => {
        React.useEffect(() => {
            function handleClickOutside(event) {
                if (refresponsive.current && !refresponsive.current.contains(event.target)) {
                    setChecked(false)
                }
            }
            document.addEventListener(`mousedown`, handleClickOutside)
            return () => {
                document.removeEventListener(`mousedown`, handleClickOutside)
            }
        }, [refresponsive])
    };
    const wrapperRef = React.useRef(null)
    const wrapperRefResponsive = React.useRef(null)
    useOutsideAlerter(wrapperRef)
    useOutsideAlerterResponsive(wrapperRefResponsive)
    return (
        <React.Fragment>
        <div className='root'>
            <AppBar className='root' position="static" >
                <Toolbar>
                    <Typography className='title-nav-bar' variant="h6" noWrap>
                       <a href={'/'} style={{cursor: 'pointer'}} ><img src={`https://i.imgur.com/hZS6Bp9.png`} alt="gomytech" style={{ borderRadius: `0px`, height: `auto` }} /></a>
                        <div className='nav-holder'>
                            <div className="nav-bar-header">
                               <a href={`/tech-it-easy`} style={{ color: `inherit` }}><Button className='button-nav'>Tech it easy</Button> </a>
                               <a href={`/inside-gomycode`} style={{ color: `inherit` }}><Button className='button-nav'>Inside GoMyCode</Button></a>
                               <a href={`/meet-a-founder`} style={{ color: `inherit` }}><Button className='button-nav'>Meet a Founder</Button></a>
                               <a href={`/en-profondeur`} style={{ color: `inherit` }}><Button className='button-nav'>En Profondeur</Button></a>
                               <a href={`/around-gomytech`} style={{ color: `inherit` }}><Button className='button-nav'>Around GoMyTech</Button></a>
                               <a href={`/random-mirror`} style={{ color: `inherit` }}><Button className='button-nav'>Random Mirror</Button></a>
                               <a href={`/blog`} style={{ color: `inherit` }}><Button className='button-nav'>Blog</Button></a>
                                <Button className='button-nav' ref={wrapperRef}>
                                     <SearchIcon style={checked ? { display: `none` } : { display: `block` }} onClick={handleChange} />
                                    <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
                                        <Autocomplete
                                            popupIcon=""
                                            id="search"
                                            options={pages}
                                            onChange={(e,v) => changePath(v)}
                                            renderInput={params => <TextField {...params} label="Search" />}
                                            classes={{ root: 'input-root',
                                                input: 'input-secondary-root' }
                                            }
                                        />
                                    </Slide>
                                </Button>
                            </div>
                        </div>
                    </Typography>
                    <div>
                    </div>
                    <IconButton
                        edge="start"
                        className='menu-button'
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                    >
                        <MenuIcon style={{ color: `#ffffff` }}/>
                    </IconButton>
                </Toolbar>
                <Drawer
                    variant="persistent"
                    anchor="right"
                    open={open}
                    classes={{
                        paper: 'drawer-nav',
                    }}
                >
                    <div className='drawer-header'>
                        <IconButton onClick={handleDrawerClose}>
                            <CloseIcon />
                        </IconButton>
                        <a href={`/tech-it-easy`} style={{ color: `inherit` }}><Button className='button-responsive-nav'>Tech it easy</Button></a>
                       <a href={`/inside-gomycode`} style={{ color: `inherit` }}><Button className='button-responsive-nav'>Inside GoMyCode</Button></a>
                        <a  href={`/meet-a-founder`} style={{ color: `inherit` }}><Button className='button-responsive-nav'>Meet a Founder</Button></a>
                       <a href={`/en-profondeur`} style={{ color: `inherit` }}><Button className='button-responsive-nav'>En Profondeur</Button></a>
                        <a href={`/around-gomytech`} style={{ color: `inherit` }}><Button className='button-responsive-nav'>Around GoMyTech</Button></a>
                       <a href={`/random-mirror`} style={{ color: `inherit` }}><Button className='button-responsive-nav'>Random Mirror</Button></a>
                       <a href={`/blog`} style={{ color: `inherit` }}><Button className='button-responsive-nav'>Blog</Button></a>
                        <Button className='button-responsive-nav'>
                            <SearchIcon style={checkedResponsive ? { display: `none` } : { display: `block` }} onClick={handleChangeResponsive} />
                            <Slide direction="left" in={checkedResponsive} mountOnEnter unmountOnExit>
                                <Autocomplete
                                    popupIcon=""
                                    id="search"
                                    options={pages}
                                    onChange={(e,v) => changePath(v)}
                                    renderInput={params => <TextField {...params} label="Search" />}
                                    classes={{ root: 'input-root',
                                        input: 'input-secondary-root' }
                                    }
                                />
                            </Slide>
                        </Button>
                    </div>
                </Drawer>
            </AppBar>
        </div>
        </React.Fragment>
    )
}
