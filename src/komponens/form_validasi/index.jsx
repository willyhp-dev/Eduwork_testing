import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Forms_Validasi from './form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


export default class Form_Validasi extends React.Component{
 render(){
     return(
         <div>
             <div className='spacing'></div>
             <Container>
                <Row>
                    <Col sm={4}></Col>
                    <Col sm={4}><Forms_Validasi/></Col>
                    <Col sm={4}></Col>
                </Row>
                
            </Container>
         </div>
     )
 }   
}