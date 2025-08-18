import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaInstagram, FaGlobe } from 'react-icons/fa';
import { CgWebsite } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbX } from "react-icons/tb";
import './Header.css';
import NavBar from './NavBar';

function Header({ refFunc }) {

    const [navVisible, setNavVisible] = useState(false);
    const navigate = useNavigate();

    const toggleNav = () => {
        setNavVisible(!navVisible);
    }

    const navHome = () => {
        if (navVisible) {
            toggleNav();
        }
        navigate('/');
    }

    const ShowNav = () => {
        return navVisible && (
            <nav className={`nav ${navVisible ? 'visible' : 'hidden'}`}>
                <a className="page" onClick={() => {
                    toggleNav();
                    navigate('/')
                    refFunc()
                }
                }>Home</a>
                <a className="page" onClick={() => {
                    toggleNav();
                    navigate('/rush')
                    refFunc()
                }
                }>Rush</a>
                {/* <a className="page" onClick={() => {
                    toggleNav();
                    navigate('/members')
                    refFunc()
                }
                }>Members</a> */}
                <a className="page" onClick={() => {
                    toggleNav();
                    navigate('/see-our-house')
                    refFunc()
                }
                }>See Our House</a>
                {/* <a className="page" onClick={() => {
                    toggleNav();
                    navigate('/gallery')
                    refFunc()
                }
                }>Gallery</a> */}
            </nav>
        )
    }

    return (
        <header className="header">
            <div className='header-nav-wrapper'>
                <div onClick={navHome} className="header-logo">
                    <input type="image" className="logo" src="./tke-logo.png" alt="Tke Logo" />
                    x
                    <input type="image" className="logo" src="./uw-logo.png" alt="Uw Logo" />
                </div>

                <NavBar className="header-top-navbar" 
                        toggleNav={toggleNav}
                        navFunc={navigate}
                        refFunc={refFunc}>
                </NavBar>
            </div>
            <ShowNav/>
        </header>
    )
}

export default Header;