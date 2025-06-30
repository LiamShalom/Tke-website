import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {

    const [navVisible, setNavVisible] = useState(true);
    const navigate = useNavigate();

    const toggleNav = () => {
        setNavVisible(!navVisible);
    }


    return (
        <header className="header">
            {navVisible && (
                <nav className="nav">
                    <a onClick={() => navigate('/about')}>About</a>
                    <a href="/">Rush</a>
                    <a href="/">Exec</a>
                    <a href="/">Gallery</a>
                </nav>
            )}
            <button className="nav-button" onClick={toggleNav}>0</button>
        </header>
    )
}

export default Header;