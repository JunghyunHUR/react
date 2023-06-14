import React from 'react';
import { Container, Row, Col, Button, Card  } from "react-bootstrap";

const Post = ({ id, writer, img, categorya, categoryb, title, content, wdate}) => {
    return (
        <Col md={4} className='mb-4'>
            <Card>
                <Card.Img variant="top" src={img} alt={img}/>
                <Card.Body>
                    <Card.Title>{id}. {title}
                        <small style={{display : "block"}}>
                            <span>{categorya}</span>
                            <span>{categoryb}</span>
                        </small>
                        </Card.Title>
                        <Card.Text>
                            <span style={{display : "block"}}>{content}</span> 
                            <span style={{display : "block"}}>[{wdate}]</span>
                            {writer}
                        </Card.Text>
                        <div className='btnbox'>
                            <Button variant='dark'>바로가기</Button>
                        </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Post;