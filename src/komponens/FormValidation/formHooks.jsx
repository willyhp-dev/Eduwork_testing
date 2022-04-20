import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

export default function FormHooks(){

    let schema = z.object({
      username: z.string().nonempty({ message: 'Username tidak Boleh Kosong' }),
      no_hp:  z.string().nonempty({message: 'No Handphone tidak Boleh Kosong'}),
      email: z.string().email(),
      alamat: z.string().nonempty({ message: 'Alamat Tidak Boleh Kosong' })
    });

    const {register,handleSubmit,formState: { errors },
    } = useForm({ resolver: zodResolver(schema)});

    const [ListForm] = useState([
        {index:1,type:"email",name:"email",placeholder:"Example :Name@example.com",label:"Email Address"},
        {index:2,type:"text",name:"username",placeholder:"Example : BudiSantoso",label:"Username"},
        {index:3,type:"number",name:"no_hp",placeholder:"Example : 087734635840",label:"No Handphone"},
        {index:4,type:"text",name:"alamat",placeholder:"Example : Jalan Sungai Raya Dalam",label:"Alamat"},
    ])
    // const Input = ({key,type,placeholder,name,label,error,ref})=>{
    //     return(
    //         <Form.Group key ={key} className="mb-3">
    //             <Form.Label>{label}</Form.Label>
    //             <Form.Control type={type} name ={name} 
    //             placeholder={placeholder} {...ref}  />
    //             <p>{error}</p>
    //         </Form.Group>
    //     )
    // }
  
    const onSubmit = (data) =>{
       console.log(data)
        alert('Anda Berhasil Register Akun')
    } ;
    return(
        <div>
            <h3>Tugas Form && Validasi</h3>
            <Form onSubmit={handleSubmit(onSubmit)}>
                {
                    ListForm.map(listforms=>
                        // <Input type ={listforms.type} name ={listforms.name}
                        //  placeholder={listforms.placeholder} label={listforms.label} 
                        // {...register} /> 
                        <Form.Group key ={listforms.index} className="mb-3">
                        <Form.Label>{listforms.label}</Form.Label>
                        <Form.Control type={listforms.type} name ={listforms.name} 
                        placeholder={listforms.placeholder} {...register(listforms.name)}   />
                        {errors[listforms.name]?.message && <p className='text-danger'>
                            {errors[listforms.name]?.message}</p>}
                        </Form.Group>
                        )
                }
           

{/* 
              <Form.Group  className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email"  name ="email"
                placeholder="Example : Name@gmail.com " {...register}   />
                
            </Form.Group>
            <Form.Group  className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text"  name ="username"
                placeholder="Example : BudiSantoso "   {...register} />
                  
            </Form.Group>
            <Form.Group  className="mb-3">
                <Form.Label>No Handphone</Form.Label>
                <Form.Control type="number"  name ="no_hp"
                placeholder="Example : BudiSantoso " {...register}  />
                
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Alamat</Form.Label>
                <Form.Control as="textarea" rows={3}  placeholder="Example : jln.sungai raya dalam"
                 {...register}/>
                
            </Form.Group> */}
        
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </div>
    )
}