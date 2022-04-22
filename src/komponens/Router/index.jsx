
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHomeUser,faDashboard,faBorderAll } from '@fortawesome/free-solid-svg-icons';
import { Button, Card, Col, Row } from 'react-bootstrap';
import './index.css';
import {BrowserRouter as Router,Link,Route,Routes} from "react-router-dom";
import BootstrapStyle from '../kedua_Styling/boostrap';
import FormHooks from '../FormValidation/formHooks';
import FetchData from '../LifeCycleFetch/fetch';
import FetchHooks from '../hooks';
import Redux from '../redux';

export default function Routers(){
    const[NavlinkBar] =useState([
        {index:1,link:"/",name:"dashboard",icon:faDashboard},//function:<Dashboard/>},
        {index:2,link:"/bootstrap",name:"Bootstrap",icon:faHomeUser},//function:<Bootstrap/>},
        {index:3,link:"/FormValidation",name:"Form Validasi",icon:faHomeUser},//function:<FormValidation/>},
        {index:4,link:"/LifeCycleComponent",name:"LifeCycleComponent",icon:faHomeUser},//function:<LifeCycleComponent/>},
        {index:5,link:"/Hooks",name:"Hooks",icon:faHomeUser},//function:<Hooks/>}
        {index:6,link:"/redux",name:"Redux",icon:faHomeUser}
    ]);
    
    const[sidebar,Setsidebar]= useState();
    const Toggle = ()=>{
        Setsidebar(!sidebar);
    }
    const Bootstrap = () => {return <div><BootstrapStyle/></div>};
    const Dashboard = () => {return <h1>Dashboard</h1>;};
    const FormValidation = ()=>{return <FormHooks/>};
    const LifeCycleComponent = () =>{return <FetchData/>};
    const Hooks = () =>{return <FetchHooks/>}
    const Reduxs = () =>{return <Redux/>}

    
      const Navlinks = ({link,icon,name,key})=>{
          return(
            <Link key ={key} to ={link}>
            <Button  className=' btn btn-dark w-100 m-0 button-margin rounded-0 pl-3 border'>
            <Row>
                <Col sm={2} ><FontAwesomeIcon icon={icon} className ='size-icon'></FontAwesomeIcon></Col>
                <Col sm={7} >{name}</Col>
                <Col sm={3}></Col>
            </Row>
        </Button>
        </Link>
          )
      }


    return(
        <div>
            <Router>
            <Row className=''>
                {
                    !sidebar &&
                    <Col sm={2} className ='bg-dark heigth p-0 m-0'>
                    <h4 className='text-white p-2'><center>SideBar</center></h4>
                    {
                        NavlinkBar.map(Navlink=>
                        <Navlinks key = {Navlink.index} link={Navlink.link} icon={Navlink.icon} name={Navlink.name} />       
                     )
                    }
                  
                </Col>
                }
                
                <Col sm>
                <Card body>
                    <Row>
                        <Col sm={1}>
                        <Button className='bg-light border-0 m-0 p-0' onClick={Toggle}>
                             <FontAwesomeIcon icon={faBorderAll} className='size-icon-toggle'></FontAwesomeIcon> 
                        </Button> 
                        </Col>
                        <Col><h5>Tugas Routing ReactJS</h5></Col>
                    </Row>
                    
                </Card>
                <Card className='mt-3' >
                <Card.Body>
                <Routes>
                    <Route path="/" element ={<Dashboard/>}/>
                    <Route path="/bootstrap" element ={<Bootstrap/>}/>
                    <Route path="/FormValidation" element ={<FormValidation/>}/>
                    <Route path="/LifeCycleComponent" element ={<LifeCycleComponent/>}/>
                    <Route path="/Hooks" element ={<Hooks/>}/>
                    <Route path="/Redux" element ={<Reduxs/>}/>
                   
                </Routes>
              
                  
                
                </Card.Body>
                </Card>
                </Col>
            </Row>
            </Router>
        </div>
    )
  
}