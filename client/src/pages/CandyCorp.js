import { useState, useRef } from 'react'
import get from '../APIHooks/GET'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form';

const CandyCorp = () => {

    const [candyData, setCandyData] = useState([])
    const calculateTotalCost = (itemCost, itemAmmount) => (itemCost * itemAmmount).toFixed(2)

    get('http://localhost:3001/candy/candyCorp', setCandyData)

    let totalQuantity = 0
    let itemTotalPrice = 0

    const handleClick = ({ itemName }) => {
        console.log({ itemName, totalQuantity, itemTotalPrice})
    }

    return (
        <>
            <h1>Candy Corp</h1>
            {candyData.map(item => (
                <div style={{ display: 'inline-block', marginLeft: 30 }}>
                    <Card style={{ width: '18rem', margin: 10 }}>
                        <Card.Body>
                            <Card.Title style={{ fontSize: 30 }}>{item.itemName}</Card.Title>
                            <Card.Text>{item.cost}</Card.Text>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                                <Form.Control
                                    style={{ marginLeft: 20 }}
                                    placeholder="item ammount"
                                    aria-label="item-ammount"
                                    aria-describedby="basic-addon1"
                                    type="number"
                                    onChange={(e) => totalQuantity = Number(e.target.value)}
                                />
                            </InputGroup>
                            <Button
                                style={{ marginLeft: 60 }}
                                onClick={() => {
                                    itemTotalPrice = Number(calculateTotalCost(totalQuantity, item.cost))
                                    handleClick(item)
                                }}
                            >Add to cart</Button>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </>
    )
}
export default CandyCorp