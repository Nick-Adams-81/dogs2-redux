import { useState } from 'react'
import get from '../APIHooks/GET'
import post from '../APIHooks/POST'
import calculateCost from '../CustomHooks/CalculateCost'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'

const CandyCorp = () => {

    const [candyData, setCandyData] = useState([])
    
    get('http://localhost:3001/candy/candyCorp', setCandyData)

    let totalQuantity = 0
    let itemtotalPrice = 0

    const handleClick = ({ itemName }) => {
        const data = { itemName, totalQuantity, itemtotalPrice }
        post('http://localhost:3001/cart/postCartItem', data)
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Candy Corp</h1>
            {candyData.map(item => (
                <div style={{ 
                    display: 'inline-block', 
                    marginLeft: 30
                    }} 
                    key={item.id}>
                    <Card style={{ width: '18rem', margin: 10 }}>
                        <Card.Body>
                            <Card.Title style={{ fontSize: 30, textAlign: 'center' }}>{item.itemName}</Card.Title>
                            <Card.Text style={{ textAlign: 'center' }}>{item.cost}</Card.Text>
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
                                    itemtotalPrice = Number(calculateCost(totalQuantity, item.cost))
                                    handleClick(item)
                                }}
                            >Add to cart</Button>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    )
}
export default CandyCorp