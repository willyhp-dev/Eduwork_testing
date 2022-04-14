
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import * as Validator from 'validatorjs';
const Input = ({label,type,name,placeholder,onChange}) => {
    return (
        <div>
        <label htmlFor="">
            {label} <br />
             <input type={type} name = {name} placeholder={placeholder} onChange={e => onChange(e.target.value)} />
        </label>        
    </div>
    )
    
}
const ShowErrors = ({errors}) =>{
    return(
    <ul style={{ color:'red'}}>
       {
           errors.map((error,i) => <li key = {i}>{error}</li>)
       }
    </ul>
    )
    
}

export default class Forms_Validasi extends React.Component{
    state = {
        email : '',
        username : '',
        no_hp : '',
        password : '',
        errors : []
    }
    handleSubmit = event => {
        event.preventDefault();
        const {email,username,no_hp,password} = this.state;
        if(email.length === 0  || username.length === 0 || no_hp.length < 12 || password.length < 8){
            let data = {email, username, no_hp,password}
            let rules ={
                email:'required|email',
                username :'required',
                no_hp:'required|min:12',
                password: 'required|min:8',
            }
          
                alert('Ada Error')
                let validation = new Validator(data,rules);
                validation.passes();
                this.setState({
                    errors:[
                       ...validation.errors.get('email'), 
                       ...validation.errors.get('username'), 
                       ...validation.errors.get('no_hp'), 
                       ...validation.errors.get('password')
        
                    ]
                })
        }
        else{
            alert('Data Anda Berhasil Register')
        }
      
        
    }
    render(){
        return(
            <div>
                {
                    this.state.errors && <ShowErrors errors={this.state.errors}/>
                }
                <form onSubmit={this.handleSubmit}>
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
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}