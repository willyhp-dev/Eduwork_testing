
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHomeUser,faDashboard,faBorderAll } from '@fortawesome/free-solid-svg-icons';
import { Button, Card, Col, Row } from 'react-bootstrap';
import './index.css';
import {BrowserRouter as Router,Link,Route,Routes} from "react-router-dom";

export default function Routers(){
    const[NavlinkBar] =useState([
        {index:1,link:"/",name:"dashboard",icon:faDashboard},//function:<Dashboard/>},
        {index:2,link:"/bootstrap",name:"Bootstrap",icon:faHomeUser},//function:<Bootstrap/>},
        {index:3,link:"/FormValidation",name:"Form Validasi",icon:faHomeUser},//function:<FormValidation/>},
        {index:4,link:"/LifeCycleComponent",name:"LifeCycleComponent",icon:faHomeUser},//function:<LifeCycleComponent/>},
        {index:5,link:"/Hooks",name:"Hooks",icon:faHomeUser},//function:<Hooks/>}
    ]);
    // const[Routering] =useState([
    //     {index:1,path:"/",function:<Dashboard/>},
    //     {index:2,path:"/bootstrap",function:<Bootstrap/>},
    //     {index:3,path:"/FormValidation"}
    // ])
    const[sidebar,Setsidebar]= useState();
    const Toggle = ()=>{
        Setsidebar(!sidebar);
    }
    const Bootstrap = () => {return <h1>Bootstrap</h1>;};
    const Dashboard = () => {return <h1>Dashboard</h1>;};
    const FormValidation = ()=>{return(<h1>Form && Validation</h1>)};
    const LifeCycleComponent = () =>{return(<h1>LifeCycleComponent</h1>)};
    const Hooks = () =>{return(<h1>Hooks</h1>)}

    //   const App = () => {
    //     let routes = useRoutes([
    //       { path: "/Bootstrap", element: <Bootstrap /> },
    //       { path: "/", element: <Dashboard /> },
    //       // ...
    //     ]);
    //     return routes;
    //   };
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
    //   const Routers = ({path,element}) =>{
    //     <Route path={path} element ={element}/>
    //   }

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
                    {/* <Link to ="/">
                        <Button  className=' btn btn-dark w-100 m-0 button-margin rounded-0 pl-3 border'>
                        <Row>
                            <Col sm={2} ><FontAwesomeIcon icon={faDashboard} className ='size-icon'></FontAwesomeIcon></Col>
                            <Col sm={7} >   Dashboard   </Col>
                            <Col sm={3}></Col>
                        </Row>
                    </Button>
                    </Link>
                    <Link to ="/Bootstrap">
                    <Button  className=' btn btn-dark w-100 m-0 button-margin rounded-0 pl-3 border'>
                        <Row>
                            <Col sm={2} ><FontAwesomeIcon icon={faHomeUser} className ='size-icon'></FontAwesomeIcon></Col>
                            <Col sm={7} >Bootstrap </Col>
                            <Col sm={4}></Col>
                        </Row> 
                    </Button>
                    </Link>
                    <Button  className=' btn btn-dark w-100 m-0 button-margin rounded-0 pl-3 border'>
                        <Row>
                            <Col sm={2} ><FontAwesomeIcon icon={faHomeUser} className ='size-icon'></FontAwesomeIcon></Col>
                            <Col sm={7} >Form Validasi</Col>
                            <Col sm={3}></Col>
                        </Row> 
                    </Button>
                    <Button  className=' btn btn-dark w-100 m-0 button-margin rounded-0 pl-3 border'>
                        <Row>
                            <Col sm={2} ><FontAwesomeIcon icon={faHomeUser} className ='size-icon'></FontAwesomeIcon></Col>
                            <Col sm={7} >LifeCycle</Col>
                            <Col sm={3}></Col>
                        </Row> 
                    </Button>
                    <Button  className=' btn btn-dark w-100 m-0 button-margin rounded-0 pl-3 border'>
                        <Row>
                            <Col sm={2} ><FontAwesomeIcon icon={faHomeUser} className ='size-icon'></FontAwesomeIcon></Col>
                            <Col sm={7} >Hooks</Col>
                            <Col sm={3}></Col>
                        </Row> 
                    </Button> */}
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
                    {/* {
                        NavlinkBar.map(links=>
                            <Routers path={links.link} element={links.function}/>
                            )
                    } */}
                </Routes>
                </Card.Body>
                </Card>
                </Col>
            </Row>
            </Router>
        </div>
    )
  
}