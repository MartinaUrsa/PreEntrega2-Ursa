import { Link, useLocation } from 'react-router-dom';
// Style
import './_NavBar.scss';
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// Components
import CartWidget from '../CartWidget/CartWidget';
import { useEffect, useState } from 'react';



const NavBar = () => {

    const location = useLocation().pathname;

    return (
        <nav className="primary-header">
            <section className="nav">
                <div className="socials">
                    <a href="https://www.instagram.com/kaczuragro/" target='_blank'><FontAwesomeIcon icon={faInstagram} style={{color: "#000000",}} /></a>
                    <a href="https://www.facebook.com/kaczuragro.com.ar/" target='_blank'><FontAwesomeIcon icon={faFacebook} style={{color: "#000000",}} /></a>
                </div>

                <ul className="navbar" id="navbar" data-visible="false">
                    <li><Link to="/" className={location === "/" ? "active" : ""}>INICIO</Link></li>
                    <li><Link to="productos" className={location == "/productos" ? "active" : ""}>PRODUCTOS</Link></li>
                    <li><Link to="contacto" className={location === "/contacto" ? "active" : ""}>CONTACTO</Link></li>
                    <li><Link to="nosotros" className={location === "/nosotros" ? "active" : ""}>NOSOTROS</Link></li>
                </ul>

                <div class="icons">
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#000000",}} />
                    <CartWidget />
                </div>
            </section>

            <div className="logo">
                <Link to="/">
                    <h1>KACZUR</h1>
                </Link>
                <h2>Quincho, jardín & imanes</h2>
            </div>

            <button className="mobile-nav-toggle" aria-controls="navbar" aria-expanded="false">
                <span className="sr-only">Menu</span>
            </button>
        </nav>
    )
}

export default NavBar;