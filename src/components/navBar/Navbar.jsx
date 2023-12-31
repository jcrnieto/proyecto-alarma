import './navBar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import img_logo from '../../image/img-logo.png';

const Navbar = () => {

   const [menuOpen, setMenuOpen] = useState(false);
   

  return (
    <div className='container-navbar'>
        <div className='navbar-superior'>
           <p>Padre Lozano 3456</p>
           <p>(0351) 153675890</p>
           <Link to={'/admin'}>
           <div>
             admin
           </div>
           </Link>
        </div>
        <div className='navbar-inferior'>
            <Link to='/'>
            <div className='container-logo'>
               <img src={img_logo} alt="" className='img-logo-navbar'/> 
            </div>
            </Link>
            <div className='container-listnavbar'>
                <ul className={`menu-items ${menuOpen ? "open" : ""}`}>
                   <li className='item-navbar' onClick={(e) => {setMenuOpen(!menuOpen)}}>
                      <Link to='/company' className='link-navbar'>Empresa </Link>
                   </li>
                   <li className='item-navbar' onClick={(e) => {setMenuOpen(!menuOpen)}}> 
                      <Link to='/products' className='link-navbar'> Productos </Link>
                   </li>
                   <li className='item-navbar'>
                      <Link to='/contact' className='link-navbar' onClick={(e) => {setMenuOpen(!menuOpen)}}> Contacto </Link>
                   </li>
               </ul>
            </div>

            <div className='menu-icon' onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <GrClose /> : <AiOutlineMenu />}
           </div>
        </div>
    </div>
  )
}

export default Navbar