import React from 'react';
import {Link} from "react-router-dom";
import {Row, Container, Col} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import {RiFacebookCircleFill, RiTwitterFill, RiInstagramFill, RiKakaoTalkFill} from "react-icons/ri";
import Navigation from '../component/Navigation';


const Header = () => {
    return (
        <header className="header">
            <Container className='py-2'>
                <Row className="justify-content-between align-items-center">
                    <Col xs={2} className='sns-icons'>
                        <RiFacebookCircleFill  className='facebook'/>
                        <RiTwitterFill  className='twitter'/>
                        <RiInstagramFill  className='instagram'/>
                        <RiKakaoTalkFill  className='kakaotalk'/>
                    </Col>
                    <Col xs={8} className='text-center'>
                        <p className='display-6 fw-bold'>
                            <Link className="mx-2" to="/">JungHyun's BLOG</Link>
                        </p>
                    </Col>
                    <Col xs={2} className='text-end'>
                        <Link style={{color: "#000", textDecoration : "none"}} className="mx-2" to="/">로그인</Link>
                        <Link style={{color: "#000", textDecoration : "none"}} className="mx-2" to="/">회원가입</Link>
                    </Col>
                </Row>
                <Navigation />
            </Container>
        </header>
    );
};

export default Header;