import { useState } from 'react'
import get from '../APIHooks/GET'
import InventoryCard from '../components/InventoryCard'

const Home = () => {

    const [userData, setUserData] = useState([])

    get('https://jsonplaceholder.typicode.com/users', setUserData)

    return (
        <>
            <h1 style={{ marginLeft: '35%' }}>Randy's Candys</h1>
            {userData.map(item => (
                <div style={{ display: 'inline-block', marginLeft: 50 }}>
                <InventoryCard key={item.id} title={item.name} text={item.email}/>
                </div>
            ))}
        </>
    )
}

export default Home