import { useState } from 'react'
import get from '../APIHooks/GET'

const Home = () => {

    const [userData, setUserData] = useState([])

    get('https://jsonplaceholder.typicode.com/users', setUserData)

    return (
        <>
            <h1>Home test</h1>
            {userData.map(item => (
                <>
                    <div key={item.id}>
                        <h1>{item.name}</h1>
                        <h1>{item.email}</h1>
                    </div>

                </>
            ))}
        </>
    )
}

export default Home