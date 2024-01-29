import React from 'react';
import Navigation from '../pages/Navigation';
import Articles from './Articles';
import Footer from './Footer';
import Banderolle from '../Images/banderollesImages.png';

const Blog = () => {
    return (
        <div>
            <Navigation />
            <img className='banderolle' src={Banderolle} />
            <h1>Blog</h1>
            <Articles /><br />
            <Footer />
        </div>
    );
};

export default Blog;