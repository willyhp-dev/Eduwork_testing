import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

export default class Axioss extends React.Component{
    render(){
        return(
            <div>
            <Container>
                <h2>Tugas CycleComponent</h2>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="email" placeholder="Search Country" />
                </Form.Group>
                <Container>
                <Row>
                    <Col sm={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col sm={4}></Col>
                    <Col sm={4}></Col>
                </Row>
  
</Container>
            </Container>
            </div>
        )
    }
}