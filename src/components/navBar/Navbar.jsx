import './navBar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';

const Navbar = () => {

   const [menuOpen, setMenuOpen] = useState(false);
   // const [openToggler, setOpenToggler] = useState(false);

  return (
    <div className='container-navbar'>
        <div className='navbar-superior'>
           <p>Padre Lozano 3456</p>
           <p>(0351) 153675890</p>
           <div>
             redes
           </div>
        </div>
        <div className='navbar-inferior'>
            <div className='container-logo'>
                LOGO
            </div>
            <div className='container-listnavbar'>
                <ul className={`menu-items ${menuOpen ? "open" : ""}`}>
                   <li className='item-navbar'>
                      <Link to='/' className='link-navbar'>Empresa </Link>
                   </li>
                   <li className='item-navbar'> 
                      <Link to='/products' className='link-navbar'> Productos </Link>
                   </li>
                   <li className='item-navbar'>
                      <Link to='/contact' className='link-navbar'> Contacto </Link>
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