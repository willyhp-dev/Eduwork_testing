
import React, { useState } from 'react';
import {  Button, Card, Form } from 'react-bootstrap';

export default function Forms(){
    const [Formss] = useState([
        {index:1,type:"email",label:"email Address",placeholder:"Example : Name@example.com" },
        {index:2,type:"text",label:"Username",placeholder:"Example : Budi Santoso" },
        {index:3,type:"text",label:"No Handphone",placeholder:"Example : 081245678923" },
        {index:4,type:"text",label:"Alamat",placeholder:"Example : Jln.Sungai Raya Dalam" },
    ])
    const Input = ({type,placeholder,label,key}) =>{
        return(
            <Form.Group key ={key} className="mb-3" controlId="formBasicEmail">
                        <Form.Label>{label}</Form.Label>
                        <Form.Control type={type} placeholder={placeholder} />            
            </Form.Group>
        )
    }
        return(
            <div>
                <Card border="secondary" className='bg-success text-white' >
                    <Card.Header>Contact Form</Card.Header>
                    <Card.Body>
                    <Form>
                      {
                          Formss.map(forms=>
                            <Input key ={forms.index} type = {forms.type} placeholder={forms.placeholder}  
                            label ={forms.label}
                            />
                            )
                      }
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        )
    }
