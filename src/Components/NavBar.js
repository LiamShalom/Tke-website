import { useState, useEffect } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { TbLayoutNavbar } from 'react-icons/tb';
import "./NavBar.css"

function useMediaQuery(query) {
    const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

    useEffect(() => {
        const media = window.matchMedia(query);
        const listener = () => setMatches(media.matches);
        media.addEventListener('change', listener);
        return () => media.removeEventListener('change', listener);
    }, [query]);

    return matches;
}

function NavBar( { toggleNav, navFunc, refFunc } ) {
    const isMobile = useMediaQuery('(max-width: 1024px)');

    return isMobile ? MobileNav( { toggleNav, navFunc, refFunc } ) 
                    : DesktopNav( { toggleNav, navFunc, refFunc } );
}

function MobileNav( { toggleNav, navFunc, refFunc } ) {
    return (
        <div className='nav-mobile-stack-wrapper'>
            <RxHamburgerMenu className='nav-mobile-stack' onClick={toggleNav} size={36}></RxHamburgerMenu>
        </div>
    );
}

function DesktopNav( { toggleNav, navFunc, refFunc } ) {
    return (
        <div className='nav-desktop-wrapper'>
            <a className="page" onClick={() => {
                navFunc('/')
                refFunc()
            }
            }>Home</a>
            <a className="page" onClick={() => {
                navFunc('/about')
                refFunc()
            }
            }>About</a>
            <a className="page" onClick={() => {
                navFunc('/rush')
                refFunc()
            }
            }>Rush</a>
            <a className="page" onClick={() => {
                navFunc('/members')
                refFunc()
            }
            }>Members</a>
            <a className="page" onClick={() => {
                navFunc('/see-our-house')
                refFunc()
            }
            }>See Our House</a>
            <a className="page" onClick={() => {
                navFunc('/gallery')
                refFunc()
            }
            }>Gallery</a>
        </div>
    );
}

export default NavBar