import React from 'react';
import Navigation from './Navigation';
import './contact.css';
import Banderolle from '../Images/banderollesImages.png';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import MapLocation from '../Images/mapJohnDoe.png';
import Footer from './Footer';

const Contact = () => {
    return (
        <div>
            <Navigation />
            <img className='banderolle' src={Banderolle} />
            <h1>ME CONTACTER</h1>
            <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
            <div className="contactContainer">
                <div className="formulaire">
                    <h2>Formulaire de contact</h2>
                    <p className='lign'>__________________________________</p>
                    <Form>

                        <Col>
                            <Form.Control placeholder="Nom" />
                        </Col><br />
                        <Col>
                            <Form.Control placeholder="Prénom" />
                        </Col><br />
                        <Col>
                            <Form.Control placeholder="Numero de Téléphone" />
                        </Col><br />
                        <Col>
                            <Form.Control placeholder="Sujet" />
                        </Col><br />
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Votre message</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <div className="submit">
                            <Button variant="primary">Envoyer</Button>{' '}
                        </div>
                    </Form>
                </div>
                <div className="coordonees">
                    <h2>Mes coordonnées</h2>
                    <p className='lign'>_______________________________</p>
                    <p> Adresse :40 Rue Laure Diebold, 69009 Lyon, France</p>
                    <p>Téléphone : 06 20 30 40 50 </p>
                    <img src={MapLocation} alt='adresse maps' />

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;