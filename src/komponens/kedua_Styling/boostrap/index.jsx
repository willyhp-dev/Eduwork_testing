import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './navbar';
import './index.css';
import { Col, Container, Row } from 'react-bootstrap';
import Images from './image';
import Biodata from './Biodata';
import styled from 'styled-components';
import Col_satu from './skill/col_satu';
import Col_kedua from './skill/col_kedua';
import Col_ketiga from './skill/col_ketiga';
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
                                <Images/>
                            </Col>
                            <Col sm={6}>
                                <Biodata/>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col sm ={4}>
                                <Col_satu/>
                            </Col>
                            <Col sm ={4}>
                                <Col_kedua/>
                            </Col>
                            <Col sm ={4}>
                                <Col_ketiga/>
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