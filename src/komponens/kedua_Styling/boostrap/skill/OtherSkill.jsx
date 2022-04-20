import React, { useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';

export default function OtherSkill(){

    const [Otherskill] = useState([
        {index:1,framework:'laravel'},
        {index:2,framework:'Bootstrap'},
        {index:3,framework:'Reactjs'}
    ]);
    const List = ({key,frameworks})=>{
        return(
            <ListGroup.Item key ={key}>{frameworks}</ListGroup.Item> 
        )
    }

        return(
            <div>
                <Card border="secondary" className='bg-danger text-white' style={{ width: '18rem' }}>
                    <Card.Header>OTHER SKILL</Card.Header>
                    <Card.Body>
                    <Card.Text>
                    <ListGroup variant="flush">
                        {
                            Otherskill.map(skill=>
                                <List key = {skill.index} frameworks={skill.framework} />
                                )
                        }
                    </ListGroup>
                    </Card.Text>
                    </Card.Body>
                    </Card>
            </div>
        )
    
}