import React from 'react';
import './services.css';
import Navigation from '../pages/Navigation';
import Banderolle from '../Images/banderollesImages.png';
import ordiImg from '../Images/ordinateur.png';
import webImg from '../Images/developpement-web.png';
import searchImg from '../Images/rechercher.png';
import Card from 'react-bootstrap/Card';
import Footer from './Footer';


const Services = () => {
    return (
        <div>
            <Navigation />
            <img className='banderolle' src={Banderolle} />
            <div className="container">
                <h1>Mon Offre de services</h1>
                <h2>Voici les préstations sur lesquelles je peux intervenir</h2>
                <div className="surligne">
                    <p><strong>__________________________________</strong></p>
                </div>
                <div className="serviceCards">
                    <div className="uxdesign">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={ordiImg} />
                            <Card.Body>
                                <Card.Title>UX DESIGN</Card.Title>
                                <Card.Text>
                                    <strong>L'UX design </strong>est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une experience de navigation optimale à l'internaute.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="devWeb">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={webImg} />
                            <Card.Body>
                                <Card.Title>DEVELOPPEMENT WEB</Card.Title>
                                <Card.Text>
                                    Le <strong>développement de sites web</strong> repose sur l'utilisation des languages HTML, CSS, Javascript et PHP.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="ref">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={searchImg} />
                            <Card.Body>
                                <Card.Title>REFERENCEMENT</Card.Title>
                                <Card.Text>
                                    Le <strong>réferencement naturel d'un site</strong>, aussi appelé SEO, consiste à mettre des techniques en oeuvre pour <i>améliorer sa position</i> dans les résultats des moteurs de recherche.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Services;