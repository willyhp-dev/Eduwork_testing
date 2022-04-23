import React, { useState } from "react";
import { Card, ListGroup } from "react-bootstrap";

export default function Skill() {
  const [skill] = useState([
    { index: 1, skills: "HTML" },
    { index: 2, skills: "CSS" },
    { index: 3, skills: "PHP" },
    { index: 4, skills: "JAVASCRIPT" },
  ]);
  const List = ({ key, skill }) => {
    return <ListGroup.Item key={key}>{skill}</ListGroup.Item>;
  };
  return (
    <div>
      <Card
        border="primary"
        className="bg-primary text-white"
        style={{ width: "18rem" }}
      >
        <Card.Header>Skill</Card.Header>
        <Card.Body>
          <Card.Text>
            <ListGroup variant="primary">
              {skill.map((k) => (
                <List key={k.index} skill={k.skills} />
              ))}
            </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
