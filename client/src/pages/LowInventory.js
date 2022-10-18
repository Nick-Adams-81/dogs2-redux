import { useState } from 'react'
import get from '../APIHooks/GET'
import InventoryCard from '../components/InventoryCard'

const LowInventory = () => {

    const [inventory, setInventory] = useState([])
    get('http://localhost:3001/store/inventory', setInventory)

    const lowInventory = inventory.filter(item => (item.capacity / item.stock) >= 4)

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Low Inventory</h1>
            {lowInventory.map(item => (
                <div style={{ display: 'inline-block', marginLeft: 30 }} key={item.id}>
                    <InventoryCard
                        title={item.productName}
                        stock={item.stock}
                        capacity={item.capacity}
                    />
                </div>
            ))}
        </>
    )
}
export default LowInventory