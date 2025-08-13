import { RxHamburgerMenu } from "react-icons/rx";
import useMediaQuery from "../Hooks/useMediaQuery";
import { FaInstagram, FaGlobe } from 'react-icons/fa';
import { CgWebsite } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import "./NavBar.css"

// Main navbar function
function NavBar( { toggleNav, navFunc, refFunc } ) {
    const isMobile = useMediaQuery('(max-width: 1024px)');

    return isMobile ? MobileNav( { toggleNav, navFunc, refFunc } ) 
                    : DesktopNav( { toggleNav, navFunc, refFunc } );
}

// Mobile version of the navbar
function MobileNav( { toggleNav, navFunc, refFunc } ) {
    return (
        <div className='nav-mobile-stack-wrapper'>
            <RxHamburgerMenu className='nav-mobile-stack' onClick={toggleNav} size={36}></RxHamburgerMenu>
        </div>
    );
}

// Desktop version
function DesktopNav( { toggleNav, navFunc, refFunc } ) {
    const insta = "https://www.instagram.com/uwtekes/";
    const nat = "https://www.tke.org/"

    return (
        <div className='nav-desktop-wrapper'>
            <a className="nav-bar-text" onClick={() => {
                navFunc('/')
                refFunc()
            }
            }>Home</a>
            <a className="nav-bar-text" onClick={() => {
                navFunc('/rush')
                refFunc()
            }
            }>Rush</a>
            {/* <a className="nav-bar-text" onClick={() => {
                navFunc('/members')
                refFunc()
            }
            }>Members</a> */}
            <a className="nav-bar-text" onClick={() => {
                navFunc('/see-our-house')
                refFunc()
            }
            }>See Our House</a>
            {/*<a className="nav-bar-text" onClick={() => {
                navFunc('/gallery')
                refFunc()
            }
            }>Gallery</a> */}
            <div className="header-icons">
                <a
                    href={insta}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="header-link"
                >
                    <FaInstagram size={36} className='header-icons-icon' />
                </a>
                <a
                    href={nat}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="header-link"
                >
                    <CgWebsite size={36} className='header-icons-icon' />
                </a>
            </div>
        </div>
    );
}

export default NavBar