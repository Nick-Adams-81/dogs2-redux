import { useState } from "react";
import get from "../APIHooks/GET";
import InventoryCard from "../components/InventoryCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../style.css";

const Home = () => {
  const [userData, setUserData] = useState([]);

  get("http://localhost:3001/store/inventory", setUserData);

  return (
    <div>
      <h1 style={{ marginLeft: "35%" }}>Randy's Candys</h1>
      <Row style={{ display: 'flex' }}>
        {userData.map((item) => (
          <Col sm={6} md={4} lg={3} className='mx-auto'>
            <InventoryCard
              title={item.productName}
              stock={item.stock}
              capacity={item.capacity}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
