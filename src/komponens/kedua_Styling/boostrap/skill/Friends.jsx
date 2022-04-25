
import { Card, ListGroup } from "react-bootstrap";
import { Friends } from "../IndexArray";

export default function FriendLists() {
  const FriendList = ({ key, header, listFriend }) => {
    return <ListGroup.Item key={key}>{listFriend}</ListGroup.Item>;
  };
  return (
    <div>
      <Card
        border="secondary"
        className="bg-success text-white"
        style={{ width: "18rem" }}
      >
        <Card.Header>Friend</Card.Header>
        <Card.Body>
          <Card.Text>
            <ListGroup variant="primary">
              {Friends.map((friend) => (
                <FriendList key={friend.index} listFriend={friend.friend} />
              ))}
            </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
