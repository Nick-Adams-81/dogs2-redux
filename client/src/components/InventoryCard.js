
import Card from 'react-bootstrap/Card';

const InventoryCard = (props) => {
    return (
        <Card style={{
            width: '14rem',
            border: '1px solid green',
            margin: 4,
            backgroundColor: '#FFF0FC',
            color: '#5D104D'
        }}>
            <Card.Body>
                <Card.Title style={{ fontSize: 17, margin: 15 }}>Item: {props.title}</Card.Title>
                <Card.Text style={{ margin: 20 }}>Stock: {props.stock}</Card.Text>
                <Card.Text style={{ margin: 20 }}>Capacity: {props.capacity}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default InventoryCard;