import React from "react";
import { Card } from "react-bootstrap";
import ListBiodata from "./listBiodata";


export default class Biodata extends React.Component {
  render() {
    return (
      <div>
        <Card className="bg-primary text-white">
          <Card.Header>Biodata</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <ListBiodata />
            </blockquote>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
