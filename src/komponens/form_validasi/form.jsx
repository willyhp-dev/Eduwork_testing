
import React from 'react';
import {  Form } from 'react-bootstrap';
import * as Validator from 'validatorjs';
const Input = ({label,type,name,placeholder,onChange}) => {
    return (
        <div>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{label}</Form.Label>
        <Form.Control type={type} placeholder={placeholder} name ={name} onChange={e => onChange(e.target.value)} />
        </Form.Group>     
    </div>
    )
    
}
const ShowErrors = ({errors}) =>{
    return(
    <ul style={{ color:'red'}}>
       {
           errors.map((error,i) => <li key = {i}>
               <div class="alert alert-danger">
               {error}
              </div>
               </li>)
       }
    </ul>
    )
}
const ShowAlert =({success}) =>{
    return(
        <div>{success}</div>
    )
}

export default class Forms_Validasi extends React.Component{
    state = {
        email : '',
        username : '',
        no_hp : '',
        password : '',
        errors : [],
    }
    handleSubmit = event => {
        event.preventDefault();
        const {email,username,no_hp,password} = this.state;
        
            let data = {email, username, no_hp,password}
            console.log(data)
            let rules ={
                email:'required|email',
                username :'required',
                no_hp:'required|min:12',
                password: 'required|min:8',
               
            }
                let validation = new Validator(data,rules);

                    validation.passes();
                    this.setState({
                        errors:[
                           ...validation.errors.get('email'), 
                           ...validation.errors.get('username'), 
                           ...validation.errors.get('no_hp'), 
                           ...validation.errors.get('password'),
                        ]
                    });
                    if(!this.setState){
                        console.log('success')
                    }
                   
               
                
        }
    render(){
        return(
            <div>
                <h3>Tugas Form && Validasi</h3>
                <form onSubmit={this.handleSubmit}>
                {
                    this.state.errors ? <ShowErrors errors={this.state.errors} /> :<ShowAlert success ={this.state.success} />
                }
                    <Input type="email" name="email" placeholder='Example : name@gmail.com' label='Email' 
                    onChange ={value =>this.setState({email : value})} />
                    <Input type="text" name="username" placeholder='Example : Willyhp' label ='Username'
                    onChange = {value =>this.setState({username: value})}
                    />
                    <Input type="number" name="no_hp" placeholder='Example : No HP' label ='No handphone' 
                    onChange = {value =>this.setState({no_hp:value})}
                    />
                    <Input type="password" name="password" placeholder='Example : Password' label ='Password'
                    onChange = {value =>this.setState({password:value})}
                    />
                    <br />
                    <button type="submit" className='btn btn-primary'>Submit</button>
                </form>
            </div>
        )
    }
}