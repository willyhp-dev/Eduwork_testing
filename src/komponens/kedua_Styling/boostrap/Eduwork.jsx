import React from "react";
import { Card } from "react-bootstrap";
import Image from "./image/51.jpeg"
export default class Images extends React.Component {
  render() {
    return (
      <div>
        <Card>
          <Card.Header>Eduwork Reactjs</Card.Header>
          <Card.Body><img src={Image} width="100%" height="400px" alt="Foo eating a sandwich." /></Card.Body>
        </Card>
      </div>
    );
  }
}
