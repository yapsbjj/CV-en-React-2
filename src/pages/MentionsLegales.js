import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import Accordion from 'react-bootstrap/Accordion';

const MentionsLegales = () => {
    return (
        <div>
            <Navigation /><br />
            <h1>MENTIONS LEGALES</h1>

            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Editeur du site</Accordion.Header>
                    <Accordion.Body>
                        <h4>John Doe</h4>
                        <adress>40 Rue Laure Diebold<br />
                            69009 Lyon, France</adress><br />
                        <a href='tel:0620304050'>06 20 30 40 50</a><br />
                        <a href='mailto:john.doe@gmail.com'>john.doe@gmail.com</a>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Hebergeur</Accordion.Header>
                    <Accordion.Body>
                        <h2>Always Data</h2>
                        <adress>91 Rue du Faubourg Saint Honoré<br />
                            75008 Paris</adress><br />
                        <a href='https://www.alwaysdata.com/fr/'>www.alwaysdata.com</a>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Credits</Accordion.Header>
                    <Accordion.Body>
                        <h2>CREDITS</h2>
                        <p>les images libres de droit sont issues du site <br />
                            Site développé par John Doe, étudiant au CEF<br />  <a href='https://pixabay.com/fr/'>pixabay</a>
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion><br />

            <Footer />
        </div>
    );
};

export default MentionsLegales;