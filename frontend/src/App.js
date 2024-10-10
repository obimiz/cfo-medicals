import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';
import LoginSignup from './Components/LoginSignup';



function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/login" element={<LoginSignup/>}/>

      </Routes>

      </BrowserRouter>

      
    </div>
  );
}

export default App;
