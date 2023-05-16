import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function DropdownItems() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <div>
            <h3>New Arrivals</h3> <h6>New Styels of Summer</h6>{" "}
            <h6>SNKRS Launch Calendar </h6> <h6>New & Upcoming Drops</h6>
          </div>
        </Col>

        <Col></Col>

        <Col>3 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
}

export default DropdownItems;
