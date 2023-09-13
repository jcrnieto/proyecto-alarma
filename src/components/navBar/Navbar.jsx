import './navbar.css';

const Navbar = () => {
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
                <ul className='list-navbar'>
                    <li className='item-navbar'> Empresa </li>
                    <li className='item-navbar'> Productos </li>
                    <li className='item-navbar'> Contacto </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar