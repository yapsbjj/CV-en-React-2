import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FreshFoodImg from '../Images/FreshFood.jpg';
import AkiraImg from '../Images/RestaurantAkira.jpg';
import BienEtreImg from '../Images/EspaceBienEtre.jpg';
const Cards = () => {
    return (
        <div className='MainCard'>
            <div className='card1'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={FreshFoodImg} />
                    <Card.Body>
                        <Card.Title>Fresh food</Card.Title>
                        <Card.Text>
                            Réalisation d'un site avec commande en ligne
                        </Card.Text>
                        <Button variant="primary">Voir</Button>
                    </Card.Body>
                    <Card.Text>Site réalisé avec PHP et MySQL</Card.Text>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={AkiraImg} />
                    <Card.Body>
                        <Card.Title>Restaurant Akira</Card.Title>
                        <Card.Text>
                            Réalisation d'un site vitrine
                        </Card.Text>
                        <Button variant="primary">Voir</Button>
                    </Card.Body>
                    <Card.Text>Site réalisé avec WordPress</Card.Text>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={BienEtreImg} />
                    <Card.Body>
                        <Card.Title>Espace bien-être</Card.Title>
                        <Card.Text>
                            Réalisation d'un site vitrine pour un patricien de bien-être
                        </Card.Text>
                        <Button variant="primary">Voir</Button>
                    </Card.Body>
                    <Card.Text>Site réalisé en HTML/CSS</Card.Text>
                </Card>

            </div>
        </div>
    );
};

export default Cards;