
import { Col, Row } from "react-bootstrap";
import { Biodata } from "./IndexArray";
export default function ListBiodata() {
  
  const Grid = ({ key, list, listbiodata }) => {
    return (
      <div>
        <Row key={key}>
          <Col sm={4}>{list}</Col>
          <Col sm={1}>:</Col>
          <Col sm={7}>{listbiodata}</Col>
        </Row>
      </div>
    );
  };
  return (
    <div>
      {Biodata.map((listdata) => (
        <Grid
          key={listdata.index}
          list={listdata.list}
          listbiodata={listdata.listBiodata}
        />
      ))}
    </div>
  );
}
