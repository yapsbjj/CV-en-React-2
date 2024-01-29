import React, { useState } from 'react';
import Navigation from '../pages/Navigation';
import Button from 'react-bootstrap/Button';
import About from '../pages/About';
import ProgressBar1 from './ProgressBar1';
import Footer from './Footer';



const Home = () => {

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const newPosition = scrollPosition + 600;
        window.scrollTo({
            top: newPosition,
            behavior: 'smooth',
        });
        setScrollPosition(newPosition);
    };


    return (
        <div>
            <Navigation />

            <div className="homeContent">
                <div className="presentation">
                    <h1>Bonjour je suis John Doe</h1><br />
                    <h2>Developpeur Full Stack</h2><br />
                    <Button onClick={handleScroll}>En Savoir Plus</Button>
                </div>
            </div>

            <div className='about'>
                <About />
            </div>
            <div className='progressBar'>
                <ProgressBar1 />
            </div><br />
            <Footer />
        </div >
    );

};
export default Home;