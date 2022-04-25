
import { Card, ListGroup } from "react-bootstrap";
import { Otherskill } from "../IndexArray";
export default function OtherSkill() {
  
  const List = ({ key, frameworks }) => {
    return <ListGroup.Item key={key}>{frameworks}</ListGroup.Item>;
  };

  return (
    <div>
      <Card
        border="secondary"
        className="bg-danger text-white"
        style={{ width: "18rem" }}
      >
        <Card.Header>OTHER SKILL</Card.Header>
        <Card.Body>
          <Card.Text>
            <ListGroup variant="flush">
              {Otherskill.map((skill) => (
                <List key={skill.index} frameworks={skill.framework} />
              ))}
            </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
