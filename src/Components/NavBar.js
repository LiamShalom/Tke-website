import { RxHamburgerMenu } from "react-icons/rx";
import useMediaQuery from "../Hooks/useMediaQuery";
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
    return (
        <div className='nav-desktop-wrapper'>
            <a className="nav-bar-text" onClick={() => {
                navFunc('/')
                refFunc()
            }
            }>Home</a>
            <a className="nav-bar-text" onClick={() => {
                navFunc('/about')
                refFunc()
            }
            }>About</a>
            <a className="nav-bar-text" onClick={() => {
                navFunc('/rush')
                refFunc()
            }
            }>Rush</a>
            <a className="nav-bar-text" onClick={() => {
                navFunc('/members')
                refFunc()
            }
            }>Members</a>
            <a className="nav-bar-text" onClick={() => {
                navFunc('/see-our-house')
                refFunc()
            }
            }>See Our House</a>
            <a className="nav-bar-text" onClick={() => {
                navFunc('/gallery')
                refFunc()
            }
            }>Gallery</a>
        </div>
    );
}

export default NavBar