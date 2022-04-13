import React from 'react';
import  { Card,Table } from 'react-bootstrap';


export default class Tables extends React.Component{
    render(){
        return(
            <div>
                <Card border="dark" className='bg-secondary text-white' >
                    <Card.Header>Table</Card.Header>
                    <Card.Body>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                            <th>NO</th>
                            <th>NAMA</th>
                            <th>UMUR</th>
                            <th>ALAMAT</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>BUDI</td>
                            <td>30</td>
                            <td>PONTIANAK</td>
                            </tr>
                            <tr>
                            <td>1</td>
                            <td>BUDI</td>
                            <td>30</td>
                            <td>PONTIANAK</td>
                            </tr>
                            <tr>
                            <td>1</td>
                            <td>BUDI</td>
                            <td>30</td>
                            <td>PONTIANAK</td>
                            </tr>
                        </tbody>
                        </Table>
                    </Card.Body>
                    </Card>
            </div>
        )
    }
}