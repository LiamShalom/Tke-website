import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {

    const [navVisible, setNavVisible] = useState(false);
    const navigate = useNavigate();

    const toggleNav = () => {
        setNavVisible(!navVisible);
    }


    return (
        <header className="header">
            <input type="image" className="logo" src= "./tke-logo.png" alt="Tke Logo" onClick={toggleNav} />
            {navVisible && (
                <nav className="nav">
                    <a className="page" onClick={() => {
                        toggleNav();
                        navigate('/')}
                    }>Home</a>
                    <a className="page" onClick={() => {
                        toggleNav();
                        navigate('/about')}
                    }>About</a>
                    <a className="page" onClick={() => {
                        toggleNav();
                        navigate('/rush')}
                    }>Rush</a>
                    <a className="page" onClick={() => {
                        toggleNav();
                        navigate('/exec')}
                    }>Exec</a>
                    <a className="page" onClick={() => {
                        toggleNav();
                        navigate('/gallery')}
                    }>Gallery</a>
                </nav>
            )}
        </header>
    )
}

export default Header;