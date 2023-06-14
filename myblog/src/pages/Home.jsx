import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from "styled-components";
import Aside from './Aside';
import Post from './Post';
import Slider from './Slider';
import { Row, Col, Button, Card, Container } from "react-bootstrap";


const Containers = styled.div`
    max-width: 100%;
    width: 1320px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
`;
const Posts = styled.div`
    flex: 9;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

const Home = () => {

    const [mylist, setMylist] = useState([]);
    useEffect(() => {
        axios.get('./data/list.json')
        .then(res => {
            setMylist(res.data);
            console.log(res.data);
        });
    }, []);

    return (
        <>
            <Slider />
            <Containers>
                <Posts>
                    <Container>
                        <Row className='my-5'>
                            {
                                mylist.map((list, index) => (
                                    <Post 
                                    id={list.id} 
                                    writer={list.writer}
                                    img={list.img}
                                    categorya={list.categorya}
                                    categoryb={list.categoryb}
                                    title={list.title}
                                    content={list.content}
                                    wdate={list.wdate}
                                    key={index}
                                    />
                                ))
                            }
                        </Row>
                    </Container>
                </Posts>
                <Aside />
            </Containers>
        </>
    );
};

export default Home;