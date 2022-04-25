
import { Card, Table } from 'react-bootstrap';
import { TableHeader,TableBody } from '../IndexArray';

export default function Tables(){
    
    const Theader = ({no,nama,umur,alamat})=>{
        return(
        <tr>
        <th>{no}</th>
        <th>{nama}</th>
        <th>{umur}</th>
        <th>{alamat}</th>
        </tr>
        )
    }    
    const Tbody = ({no,nama,umur,alamat})=>{
        return(
            <tr>
            <td>{no}</td>
            <td>{nama}</td>
            <td>{umur}</td>
            <td>{alamat}</td>
            </tr>
        )
    }
        return(
            <div>
                <Card border="dark" className='bg-secondary text-white' >
                    <Card.Header>Table</Card.Header>
                    <Card.Body>
                    <Table striped bordered hover variant="dark">
                        <thead>
                           {
                               TableHeader.map(head=>
                                <Theader no ={head.no} nama ={head.nama} umur ={head.umur} alamat={head.alamat}  />
                                )
                           }
                        </thead>
                        <tbody>
                            {
                                TableBody.map(body=>
                                    <Tbody no={body.no} nama ={body.nama} umur ={body.umur} alamat ={body.alamat} />
                                    )
                            }
                        </tbody>
                        </Table>
                    </Card.Body>
                    </Card>
            </div>
        )
    }
