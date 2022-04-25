
import { Button, Card, Form } from 'react-bootstrap';
import { Formss } from "./../IndexArray";

export default function Forms(){
   
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
