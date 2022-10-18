import Card from "react-bootstrap/Card";
import "../style.css";

const InventoryCard = (props) => {
  return (
    <Card
      id="card"
      style={{
        width: "14rem",
        border: "1px solid black",
        margin: 4,
      }}
    >
      <Card.Body>
        <Card.Title style={{ margin: 15, fontSize: 25 }}>
          Item: {props.title}
        </Card.Title>
        <Card.Text style={{ margin: 20 }}>Stock: {props.stock}</Card.Text>
        <Card.Text style={{ margin: 20 }}>Capacity: {props.capacity}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default InventoryCard;
