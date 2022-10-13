import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home'
import LowInventory from './pages/LowInventory'
import DentistsHateUs from './pages/DentistsHateUs'
import TheSweetSuite from './pages/TheSweetSuite'
import ShoppingCart from './pages/ShoppingCart'
import CandyCorp from './pages/CandyCorp'
import { Routes, Route, useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button'



function App() {

  const navigate = useNavigate()
  return (
    <>
    <div style={{ marginLeft: '20%' }}>
       <Button variant="info" style={{ margin: 2 }} onClick={() => navigate("/")}>Home</Button>
    <Button variant="info" style={{ margin: 2 }} onClick={() => navigate("/lowInventory")}>Low Inventory</Button>
    <Button variant="info" style={{ margin: 2 }} onClick={() => navigate("/candyCorp")}>Candy Corp</Button>
    <Button variant="info" style={{ margin: 2 }} onClick={() => navigate("/theSweetSuite")}>The Sweet Suite</Button>
    <Button variant="info" style={{ margin: 2 }} onClick={() => navigate("/dentistsHateUs")}>Dentists Hate Us</Button>
    <Button variant="info" style={{ margin: 2 }} onClick={() => navigate("/shoppingCart")}>Cart</Button>
    </div>
   
     
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lowInventory" element={<LowInventory />} />
      <Route path="/candyCorp" element={<CandyCorp />} />
      <Route path="/theSweetSuite" element={<TheSweetSuite />} />
      <Route path="/dentistsHateUs" element={<DentistsHateUs />} />
      <Route path="/shoppingCart" element={<ShoppingCart />} />
    </Routes>
    </>
   
  );
}

export default App;
