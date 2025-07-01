import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaInstagram, FaGlobe } from 'react-icons/fa';
import { TbX } from "react-icons/tb";
import './Header.css';

function Header() {

    const [navVisible, setNavVisible] = useState(false);
    const navigate = useNavigate();
    const insta = "https://www.instagram.com/uwtekes/";
    const nat = "https://www.tke.org/"

    const toggleNav = () => {
        setNavVisible(!navVisible);
    }


    return (
        <header className="header">
            <div onClick={toggleNav}>
                <input type="image" className="logo" src="./tke-logo.png" alt="Tke Logo"  />
                <input type="image"  className="logo" src="./uw-logo.png" alt="Uw Logo"/>
            </div>

            <div className="header-icons">
                <a
                    href={insta}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="header-link"
                >
                    <FaInstagram size={36} />
                </a>
                <a
                    href={nat}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="header-link"
                >
                    <FaGlobe size={36} />
                </a>
            </div>


            {navVisible && (
                <nav className="nav">
                    <a className="page" onClick={() => {
                        toggleNav();
                        navigate('/')
                    }
                    }>Home</a>
                    <a className="page" onClick={() => {
                        toggleNav();
                        navigate('/about')
                    }
                    }>About</a>
                    <a className="page" onClick={() => {
                        toggleNav();
                        navigate('/rush')
                    }
                    }>Rush</a>
                    <a className="page" onClick={() => {
                        toggleNav();
                        navigate('/exec')
                    }
                    }>Exec</a>
                    <a className="page" onClick={() => {
                        toggleNav();
                        navigate('/gallery')
                    }
                    }>Gallery</a>
                </nav>
            )}
        </header>
    )
}

export default Header;