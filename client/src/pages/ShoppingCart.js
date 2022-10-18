import { useState } from "react";
import get from "../APIHooks/GET";
import Delete from "../APIHooks/DELETE";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../style.css";

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  get("http://localhost:3001/cart/shoppingCart", setCart);

  let totals = [];
  cart.forEach(({ itemtotalPrice }) => totals.push(itemtotalPrice));
  const total = totals.reduce((item, total) => item + total, 0).toFixed(2);

  const handleClick = () => {
    alert(`Your cart total is ${total}`);
    Delete(`http://localhost:3001/cart/deleteCart`);
    window.location.reload();
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Shopping Cart</h1>
      <h2 style={{ textAlign: "center" }}>your total is: ${total}</h2>
      <Button
        style={{ width: "90%", marginLeft: 40 }}
        onClick={handleClick}
        variant="info"
      >
        Submit
      </Button>{" "}
      <Row>
        {cart.map((item) => (
          <Col sm={12} md={6} lg={4}>
            <Card id='dataCard2' style={{ width: "18rem", margin: 10 }} className="mx-auto">
              <Card.Body>
                <Card.Title style={{ marginLeft: 60 }}>Item: {item.itemName}</Card.Title>
                <Card.Text style={{ marginLeft: 85 }}>Quantity: {item.totalQuantity}</Card.Text>
                <Card.Text style={{ marginLeft: 85 }}>Price: {item.itemtotalPrice}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};
export default ShoppingCart;
