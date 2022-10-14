import { useEffect, useState } from 'react'
import get from '../APIHooks/GET'
import InventoryCard from '../components/InventoryCard'

const Home = () => {

    const [userData, setUserData] = useState([])

    // get('http://localhost:3001/store/inventory', setUserData)
    useEffect(() => {
        fetch('http://localhost:3001/store/inventory')
            .then(res => res.json())
            .then(data => setUserData(data))
            .catch(err => console.log(err))
    }, [])


    return (
        <>
            <h1 style={{ marginLeft: '35%' }}>Randy's Candys</h1>
            {userData.map(item => (
                <div style={{ display: 'inline-block', marginLeft: 50 }}>
                    <InventoryCard
                        key={item.id}
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