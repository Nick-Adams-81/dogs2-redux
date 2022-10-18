import { useState } from "react";
import get from "../APIHooks/GET";
import InventoryCard from "../components/InventoryCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const LowInventory = () => {
  const [inventory, setInventory] = useState([]);
  get("http://localhost:3001/store/inventory", setInventory);

  const lowInventory = inventory.filter(
    (item) => item.capacity / item.stock >= 4
  );

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Low Inventory</h1>
      <Row style={{ display: "flex" }}>
        {lowInventory.map((item) => (
          <Col sm={6} md={4} lg={3}>
            <InventoryCard
              title={item.productName}
              stock={item.stock}
              capacity={item.capacity}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};
export default LowInventory;
