import { useState } from "react";
import get from "../APIHooks/GET";
import post from "../APIHooks/POST";
import calculateCost from "../CustomHooks/CalculateCost";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../style.css";

const DentistsHateUs = () => {
  const [candyData, setCandyData] = useState([]);
  get("http://localhost:3001/dentist/dentistsHateUs", setCandyData);

  let totalQuantity = 0;
  let itemtotalPrice = 0;
  const handleClick = ({ itemName }) => {
    const data = { itemName, totalQuantity, itemtotalPrice };
    post("http://localhost:3001/cart/postCartItem", data);
  };

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
                <Card.Title style={{ fontSize: 30, textAlign: "center" }}>
                  {item.itemName}
                </Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                  {item.cost}
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
                  variant="outline-success"
                  style={{ marginLeft: 75 }}
                  onClick={() => {
                    itemtotalPrice = Number(
                      calculateCost(totalQuantity, item.cost)
                    );
                    handleClick(item);
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
