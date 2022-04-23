import "./index.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import {
  NavlinkBar,
  Dashboard,
  FormValidation,
  Hooks,
  LifeCycleComponent,
  Reduxs,
  Bootstrap,
} from "./Navlink";
import { Button, Card, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderAll } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Routers() {
  const [sidebar, Setsidebar] = useState();
  
const Toggle = () => {
  Setsidebar(!sidebar);
};
  const Navlinks = ({ link, icon, name, key }) => {
    return (
      <Link key={key} to={link}>
        <Button className=" btn btn-dark w-100 m-0 button-margin rounded-0 pl-3 border">
          <Row>
            <Col sm={2}>
              <FontAwesomeIcon
                icon={icon}
                className="size-icon"
              ></FontAwesomeIcon>
            </Col>
            <Col sm={7}>{name}</Col>
            <Col sm={3}></Col>
          </Row>
        </Button>
      </Link>
    );
  };

  return (
    <div>
      <Router>
        <Row className="">
          {!sidebar && (
            <Col sm={2} className="bg-dark heigth p-0 m-0">
              <h4 className="text-white p-2">
                <center>SideBar</center>
              </h4>
              {NavlinkBar.map((Navlink) => (
                <Navlinks
                  key={Navlink.index}
                  link={Navlink.link}
                  icon={Navlink.icon}
                  name={Navlink.name}
                />
              ))}
            </Col>
          )}
          <Col sm>
            <Card body>
              <Row>
                <Col sm={1}>
                  <Button
                    className="bg-light border-0 m-0 p-0"
                    onClick={Toggle}
                  >
                    <FontAwesomeIcon
                      icon={faBorderAll}
                      className="size-icon-toggle"
                    ></FontAwesomeIcon>
                  </Button>
                </Col>
                <Col>
                  <h5>Tugas Routing ReactJS</h5>
                </Col>
              </Row>
            </Card>
            <Card className="mt-3">
              <Card.Body>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/bootstrap" element={<Bootstrap />} />
                  <Route path="/FormValidation" element={<FormValidation />} />
                  <Route
                    path="/LifeCycleComponent"
                    element={<LifeCycleComponent />}
                  />
                  <Route path="/Hooks" element={<Hooks />} />
                  <Route path="/Redux" element={<Reduxs />} />
                </Routes>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Router>
    </div>
  );
}
