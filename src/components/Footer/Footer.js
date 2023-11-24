import { Link } from 'react-router-dom';
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
// Style
import "./_Footer.scss"
// Assets
import tarjetas from "./tarjetas.png"

const Footer = () => {
    return (
        <div className='footer'>
            <div class="socials-footer">
                <a href="https://www.instagram.com/kaczuragro/" target='_blank'><FontAwesomeIcon icon={faInstagram} style={{color: "#000000",}} /></a>
                <a href="https://www.facebook.com/kaczuragro.com.ar/" target='_blank'><FontAwesomeIcon icon={faFacebook} style={{color: "#000000",}} /></a>
            </div>
            <div class="footer-links">
                <ul>
                    <li><Link to="contacto">Contacto</Link></li>
                    <li><Link to="tyc">Términos y condiciones</Link></li>
                    <li><Link to="nosotros">Nosotros</Link></li>
                </ul>
            </div>
            <img className="tarjetas" src={tarjetas} alt="Tarjetas aceptadas" />
            <p className='address'>Av. Lope de Vega 1964, Villa Devoto, CABA - Horario: L a V 10.30 a 13hs y 16 a 19.30hs</p>
        </div>
    )
}

export default Footer;