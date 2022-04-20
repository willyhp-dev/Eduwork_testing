import React from 'react';
import { Card } from 'react-bootstrap';


export default class Images extends React.Component{
       render(){
           return(
               <div>
                   <Card>
                    <Card.Header>Eduwork Reactjs</Card.Header>
                    <Card.Body>
                    <img src="image/51.jpeg" width="100%" height="400px"  />
                    </Card.Body>
                    </Card>
               </div>
           )
       }
}