import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './navbar';
import './index.css';
import { Col, Container, Row } from 'react-bootstrap';
import Eduwork from './Eduwork';
import Profile from './Biodata';
import styled from 'styled-components';
import FriendLists from './skill/Friends';
import OtherSkill from './skill/OtherSkill';
import Skill from './skill/Skill';
import Forms from './form_table/form';
import Tables from './form_table/table';
const Fonts = styled.p`
font-family: "Comic Sans MS", cursive, sans-serif;
`
 export default class Bootstrap extends React.Component{
        render(){
            return(
                <div>
                    <Fonts>
                   <Navbars/>
                   <br />
                   <Container>
                        <Row>
                            <Col sm={6}>
                                <Eduwork/>
                            </Col>
                            <Col sm={6}>
                                <Profile/>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col sm ={4}>
                                <FriendLists/>
                            </Col>
                            <Col sm ={4}>
                                <OtherSkill/>
                            </Col>
                            <Col sm ={4}>
                                <Skill/>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col sm ={6}>
                                <Forms/>
                            </Col>
                            <Col sm ={6}>
                                <Tables/>
                            </Col>
                        </Row>
                    </Container>
                    </Fonts>
                </div>
            )
        }
}