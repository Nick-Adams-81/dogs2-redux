import { useState } from "react"
import get from '../APIHooks/GET'
import Delete from '../APIHooks/DELETE'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const ShoppingCart = () => {

    const [cart, setCart] = useState([])
    get('http://localhost:3001/cart/shoppingCart', setCart)

    let totals = []
    cart.forEach(({ itemtotalPrice }) => totals.push(itemtotalPrice))
    const total = totals.reduce((item, total) => item + total, 0).toFixed(2)

    const handleClick = () => {
        alert(`Your cart total is ${total}`)
        Delete(`http://localhost:3001/cart/deleteCart`)
        window.location.reload()
    }

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>shopping cart</h1>
            <h2 style={{ textAlign: 'center' }}>your total is: ${total}</h2>
            <Button
                style={{  width: '90%', marginLeft: 40 }}
                onClick={handleClick}
                variant="info">Submit</Button>{' '}
            {cart.map(item => (
                <div style={{ display: 'inline-block' }}
                    key={item.id}>
                    <Card style={{ width: '18rem', margin: 10 }}>
                        <Card.Body>
                            <Card.Title>Item: {item.itemName}</Card.Title>
                            <Card.Text>Quantity: {item.totalQuantity}</Card.Text>
                            <Card.Text>Price: {item.itemtotalPrice}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </>
    )
}
export default ShoppingCart