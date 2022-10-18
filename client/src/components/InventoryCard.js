import Card from "react-bootstrap/Card";
import "../style.css";

const InventoryCard = (props) => {
  return (
    <Card
      id="card"
      className="mx-auto"
      style={{
        width: "14rem",
        height: "14rem",
        border: "1px solid black",
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
