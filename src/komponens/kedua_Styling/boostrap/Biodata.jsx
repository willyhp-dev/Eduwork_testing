import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';



export default class Biodata extends React.Component{
    render(){
        return(
            <div>
                 
              <Card className='bg-primary text-white'>
                <Card.Header>Biodata</Card.Header>
                <Card.Body>
                <blockquote className="blockquote mb-0" >
                 <Row>
                <Col sm={4}>Nama</Col>
                <Col sm={1}>:</Col>
                <Col sm={7}>Willy Handoyo</Col>
                </Row>

                <Row>
                <Col sm={4}>Umur</Col>
                <Col sm={1}>:</Col>
                <Col sm={7}>23</Col>
                </Row>
                <Row>
                <Col sm={4}>Tempat Lahir</Col>
                <Col sm={1}>:</Col>
                <Col sm={7}>Pontianak</Col>
                </Row>
                <Row>
                <Col sm={4}>Tanggal Lahir</Col>
                <Col sm={1}>:</Col>
                <Col sm={7}>25 Januari 1998</Col>
                </Row>
                <Row>
                <Col sm={4}>Hobby</Col>
                <Col sm={1}>:</Col>
                <Col sm={7}>Ngoding</Col>
                </Row>
                <Row>
                <Col sm={4}>Pendidikan</Col>
                <Col sm={1}>:</Col>
                <Col sm={7}>S1 IT</Col>
                </Row>
                <Row>
                <Col sm={4}>Domisili</Col>
                <Col sm={1}>:</Col>
                <Col sm={7}>Pontianak</Col>
                </Row>
    </blockquote>
  </Card.Body>
</Card>

            </div>
        )
    }
} 