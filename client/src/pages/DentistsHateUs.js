import { useState } from "react";
import get from "../APIHooks/GET";
import calculateCost from "../CustomHooks/CalculateCost";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import handleClick from "../CustomHooks/HandleClick";
import "../style.css";

const DentistsHateUs = () => {
  const [candyData, setCandyData] = useState([]);
  get("http://localhost:3001/dentist/dentistsHateUs", setCandyData);

  let totalQuantity = 0;
  let itemtotalPrice = 0;
 
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Dentists Hate Us</h1>
      <Row style={{ display: "flex" }}>
        {candyData.map((item) => (
          <Col sm={12} md={6} lg={4}>
            <Card
              id="dataCard"
              style={{ width: "18rem", margin: 3 }}
              className="mx-auto"
            >
              <Card.Body>
                <Card.Title
                  id="title2"
                  style={{ fontSize: 30, textAlign: "center" }}
                >
                  {item.itemName}
                </Card.Title>
                <Card.Text id="cardText" style={{ textAlign: "center", fontSize: 20 }}>
                  ${item.cost}/per item
                </Card.Text>
                <InputGroup className="mb-3">
                  <Form.Control
                    style={{ marginLeft: 20 }}
                    placeholder="item ammount"
                    aria-label="item-ammount"
                    aria-describedby="basic-addon1"
                    type="number"
                    onChange={(e) => (totalQuantity = Number(e.target.value))}
                  />
                </InputGroup>
                <Button
                  variant="success"
                  style={{ marginLeft: 75 }}
                  onClick={() => {
                    itemtotalPrice = Number(
                      calculateCost(totalQuantity, item.cost)
                    );
                    handleClick(item, totalQuantity, itemtotalPrice);
                  }}
                >
                  Add to cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default DentistsHateUs;
