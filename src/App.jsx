import './App.css';
import Navbar from './components/navBar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Company from './components/company/Company';
import Products from './components/products/Products';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Admin from './components/Admin/Admin';
import ProductIdAdmin from './components/productIdAdmin/ProductIdAdmin';
import AddProductAdmin from './components/addProductAdmin/AddProductAdmin';
import ProductId from './components/productId/ProductId';
//import ComponentePrueba from './components/ComponentePrueba'; 

function App() {
 
return (
  <BrowserRouter>
    <div>
        <Navbar/> 
       <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/company' element={<Company/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/admin' element={<Admin/>} />
          <Route path='/productIdAdmin/:id' element={<ProductIdAdmin/>} />
          <Route path='/admin/addProductAdmin' element={<AddProductAdmin enableInput/>} />
          <Route path='/productId/:id' element={<ProductId/>} />

          {/* <Route path='/componenteprueba' element={<ComponentePrueba/>} /> */}
       </Routes>
       <Footer/>
    </div>
  </BrowserRouter>
  )
}

export default App
