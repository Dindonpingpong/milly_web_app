import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import './../../App.css';
import './Header.css';

const profile = '/images/profile.png';

const Header = () => {
    return(
        <header>
            <Container>
                <Row>
                    <Col>
                        <span className="font-link header-title">Milly</span>
                    </Col>
                    <Col>
                          <img className="header__profile" href={profile}
                          alt="profile"/>                            
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header;