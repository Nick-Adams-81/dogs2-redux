import { useState } from "react"
import get from '../APIHooks/GET'
import Delete from '../APIHooks/DELETE'
import Button from 'react-bootstrap/Button';

const ShoppingCart = () => {

    const [cart, setCart] = useState([])
    let totals = []
    cart.forEach(({ itemtotalPrice }) => totals.push(itemtotalPrice))
    const total = totals.reduce((item, total) => item + total, 0).toFixed(2)
    
    const handleClick = () => {
        alert(`Your cart total is ${total}`)
        Delete(`http://localhost:3001/cart/deleteCart`)
        window.location.reload()
    }


    get('http://localhost:3001/cart/shoppingCart', setCart)
    
    return (
        <>
        <h1>shopping cart</h1>
        <h2>your total is: ${total}</h2>
        <Button 
        onClick={handleClick}
        variant="info">Submit</Button>{' '}
        {cart.map(item => (
            <div key={item.id}>
                <p>Item: {item.itemName}</p>
                <p>Quantity: {item.totalQuantity}</p>
                <p>Price: {item.itemtotalPrice}</p>
            </div>
        ))}
        </>
    )
}
export default ShoppingCart