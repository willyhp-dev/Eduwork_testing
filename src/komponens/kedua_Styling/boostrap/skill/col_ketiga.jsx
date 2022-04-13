import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

export default class Col_ketiga extends React.Component{
    render(){
        return(
            <div>
                <Card border="primary" className='bg-primary text-white' style={{ width: '18rem' }}>
                    <Card.Header>Skill</Card.Header>
                    <Card.Body>
                    <Card.Text>
                    <ListGroup variant="primary">
                        <ListGroup.Item>HTML</ListGroup.Item>
                        <ListGroup.Item>CSS</ListGroup.Item>
                        <ListGroup.Item>PHP</ListGroup.Item>
                        <ListGroup.Item>JAVASCRIPT</ListGroup.Item>
                    </ListGroup>
                    </Card.Text>
                    </Card.Body>
                    </Card>
            </div>
        )
    }
}