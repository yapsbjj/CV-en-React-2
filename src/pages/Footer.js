import React from 'react';
import { NavLink } from "react-router-dom";
import './footer.css';
import LogoFacebook from '../facebook.png';
import LogoInsta from '../instagram.png';
import LogoLinkedin from '../logo-linkedin.png';



const Footer = () => {


    return (
        <div className='footer'>
            <div className="sb__footersection__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links-div">
                        <h4>John Doe</h4>
                        <adress>40 Rue Laure Diebold<br />
                            69009 Lyon, France</adress><br />
                        <a href='tel:0620304050'>06 20 30 40 50</a>

                        <h4>Liens sociaux</h4>
                        <div className="socialmedia">
                            <p><img src={LogoFacebook} alt="facebook" /></p>
                            <p><img src={LogoInsta} alt="twitter" /></p>
                            <p><img src={LogoLinkedin} alt="Linkedin" /></p>

                        </div>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Liens utiles</h4>
                        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            <li>Accueil</li>
                        </NavLink>
                        <a href='/about'>
                            <p>A propos</p>
                        </a>
                        <NavLink to="/services" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            <li>Services</li>
                        </NavLink>
                        <a href='/contact'>
                            <p>Me contacter</p>
                        </a>
                        <NavLink to="/mentionsLegales" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            <li>Mentions légales</li>
                        </NavLink>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Mes Réalisations</h4>
                        <NavLink to="/realisations" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            <li>Fresh food</li>
                        </NavLink>
                        <NavLink to="/realisations" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            <li>Restaurant Akira</li>
                        </NavLink>
                        <NavLink to="/realisations" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            <li>Espace bien-être</li>
                        </NavLink>

                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Derniers articles</h4>
                        <NavLink to="/blog" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            <li>Coder son site en HTML/CSS</li>
                        </NavLink>
                        <NavLink to="/blog" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            <li>Vendre ses produits sur le web</li>
                        </NavLink>
                        <NavLink to="/blog" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            <li>Se positionner sur Google</li>
                        </NavLink>

                        <a href='/contact'>
                            <p>Contact</p>
                        </a>
                    </div>

                </div>
                <hr></hr>
                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>@{new Date().getFullYear()}Designed by John Doe
                        </p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Footer;