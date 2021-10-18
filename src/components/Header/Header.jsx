import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import './../../App.css';
import './Header.css';

const profile = process.env.PUBLIC_URL + "/images/profile.png";

const Header = () => {
    return(
        <header>
            <Container>
                <Row>
                    <Col>
                        <span className="font-link header-title">Milly</span>
                    </Col>
                    <Col>
                          <img className="header__profile" src={profile}
                          alt="profile"/>                            
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header;