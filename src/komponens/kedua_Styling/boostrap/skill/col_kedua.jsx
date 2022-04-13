import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

export default class Col_kedua extends React.Component{
    render(){
        return(
            <div>
                <Card border="secondary" className='bg-danger text-white' style={{ width: '18rem' }}>
                    <Card.Header>OTHER SKILL</Card.Header>
                    <Card.Body>
                    <Card.Text>
                    <ListGroup variant="flush">
                        <ListGroup.Item>LARAVEL</ListGroup.Item>
                        <ListGroup.Item>BOOTSTRAP</ListGroup.Item>
                    </ListGroup>
                    </Card.Text>
                    </Card.Body>
                    </Card>
            </div>
        )
    }
}