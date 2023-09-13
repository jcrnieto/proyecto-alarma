import './App.css';
import Navbar from './components/navBar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Company from './components/company/Company';
import Products from './components/products/Products';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
 
return (
  <BrowserRouter>
    <div>
       <Navbar/>
       <Routes>
          <Route path='/' element={<Company/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/contact' element={<Contact/>} />
       </Routes>
       <Footer/>
    </div>
  </BrowserRouter>
  )
}

export default App
