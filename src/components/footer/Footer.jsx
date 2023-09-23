import './footer.css';
import { Link } from 'react-router-dom';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { ImLocation } from 'react-icons/im';
import { MdOutlineMailOutline } from 'react-icons/md';
import { BiLogoFacebookSquare } from 'react-icons/bi';
import { BsInstagram } from 'react-icons/bs';
import img_logo from '../../image/footer-logo.png';

const Footer = () => {

  return (
    <div className='container-footer'>
    <div className="footer-superior">
       <Link to='/'>
        <div className='logo-footer'>
            <img src={img_logo} alt="" className='img-logo-footer'/> 
        </div>
       </Link>
        <div className='container-conocenos'>
           <h1 className='title-conocenos'>Conocenos</h1> 
           <h3><Link to='/company' className='link-footer'>Empresa</Link></h3>
           <h3><Link to='products' className='link-footer'>Productos</Link></h3>
           <h3><Link to='contact' className='link-footer'>Contacto</Link></h3>
        </div>
        <div>
           
            <ul className='ul-contact'>
            <li className='list'>
               <h1 className='title-contact'>Contáctanos</h1>
            </li>
            <li className='list'>
              <i className='list-icon'><BsFillTelephoneFill/></i>
              <h4 className='list-text'>(0351) 153675890</h4>
            </li>
            <li className='list'>
              <i className='list-icon'><ImLocation/></i>
              <h4 className='list-text list-text-direction'>Padre Lozano 3456.Córdoba</h4>
            </li>
            <li className='list'>
              <i className='list-icon'><MdOutlineMailOutline/></i>
              <h4 className='list-text'>escalante@gmail.com</h4>
            </li>
            <li className='list'>
              <i className='list-contact'><BiLogoFacebookSquare/></i>
              <i className='list-contact'><BsInstagram/></i>
            </li>
            </ul>
        </div>
    </div>
    <div className='footer-inferior'>
         <p className='footer-reserved'>Todos los derechos reservados</p>
    </div>
    </div>
  )
}

export default Footer