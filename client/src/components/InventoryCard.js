
import Card from 'react-bootstrap/Card';

const InventoryCard = (props) => {
    return (
        <Card style={{
            width: '15rem',
            border: '1px solid green',
            margin: 4,
            backgroundColor: '#FFF0FC',
            color: '#5D104D'
        }}>
            <Card.Body>
                <Card.Title style={{ fontSize: 20, margin: 17 }}>{props.title}</Card.Title>
                <Card.Text style={{ margin: 20 }}>{props.text}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default InventoryCard;