import React from 'react';
import Navigation from '../pages/Navigation';
import Banderolle from '../Images/banderollesImages.png';
import Cards from './Cards';
import Footer from './Footer';



const Realisations = () => {
    return (
        <div>
            <Navigation />
            <img className='banderolle' src={Banderolle} /><br />
            <h1>PORTFOLIO</h1><br />
            <h2>Voici quelques-unes de mes réalisations</h2><br />
            <div className="card">
                <Cards />
            </div><br />
            <Footer />
        </div>
    );
};

export default Realisations;