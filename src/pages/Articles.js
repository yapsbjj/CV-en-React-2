import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ImgCard1 from '../Images/codage1.jpg';
import ImgCard2 from '../Images/codage2.jpg';
import ImgCard3 from '../Images/codage3.jpeg';
import ImgCard4 from '../Images/codage4.jpg';
import ImgCard5 from '../Images/codage5.jpg';
import ImgCard6 from '../Images/codage6.webp';


const Articles = () => {
    return (
        <div className='articles'>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={ImgCard1} />
                    <Card.Body>
                        <Card.Title>Coder son site en HTML/CSS</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={ImgCard2} />
                    <Card.Body>
                        <Card.Title>Vendre des produits sur le web</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to
                            additional content.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={ImgCard3} />
                    <Card.Body>
                        <Card.Title>Se positionner sur Google</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This card has even longer content than the
                            first to show that equal height action.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={ImgCard4} />
                    <Card.Body>
                        <Card.Title>Coder en Responsive Design</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={ImgCard5} />
                    <Card.Body>
                        <Card.Title>Techniques de réferencement</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to
                            additional content.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={ImgCard6} />
                    <Card.Body>
                        <Card.Title>Apprendre à coder</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This card has even longer content than the
                            first to show that equal height action.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Articles;