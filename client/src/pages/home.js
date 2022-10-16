import { useState } from 'react'
import get from '../APIHooks/GET'
import InventoryCard from '../components/InventoryCard'

const Home = () => {

    const [userData, setUserData] = useState([])

    get('http://localhost:3001/store/inventory', setUserData)

    return (
        <>
            <h1 style={{ marginLeft: '35%' }}>Randy's Candys</h1>
            {userData.map(item => (
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

export default Home