import React, { forwardRef, useEffect, useState } from 'react';
import image1 from '../Images/photoDeJohnDoe.jpg';
import axios from 'axios';


const About = () => {

    const [user, setUser] = useState([])
    useEffect(() => {
        axios.get("https://api.github.com/users/github-john-doe/repos").then((res) => { setUser(res.data) })
    }, [])
    return (
        <div className='about'>

            <div className="textAbout">
                <h1>A Propos</h1>
                <h2>{user.full_name}</h2>
                <p>Passioné par l'informatique et les nouvelles technologies, J'ai suivi une formation d'<strong>intégrateur-développeur web </strong>au CEF. Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web</strong>.<br />
                    Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de développeur Web full stack.<br />
                    J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du Web.

                </p>
            </div>
            <div className='competences'>
                <img className='image1' src={image1} alt='Photo de Moi'></img>
                <h2>Mes compétences</h2>
            </div>
        </div>
    );
};

export default forwardRef(About);