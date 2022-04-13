import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

export default class Col_satu extends React.Component{
    render(){
        return(
            <div>
                 <Card border="secondary" className='bg-success text-white' style={{ width: '18rem' }}>
                    <Card.Header>FRIEND</Card.Header>
                    <Card.Body>
                    <Card.Text>
                    <ListGroup variant="primary">
                        <ListGroup.Item>Welly Cipwanto</ListGroup.Item>
                        <ListGroup.Item>Budi Santoso</ListGroup.Item>
                        <ListGroup.Item>Budi Setiawan</ListGroup.Item>
                    </ListGroup>
                    </Card.Text>
                    </Card.Body>
                    </Card>
  
            </div>
        )
    }
}