import './cardsContact.css';
import { ImLocation } from 'react-icons/im';
import { MdOutlineMailOutline } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';

const CardsContact = () => {
  return (
    <div className='container-info-contact'>
        <div className='contact-info'>
            <i className='icon-info'><BsWhatsapp/></i>
            <p className='info-contact'>3515640564</p>
        </div>
        <div className='contact-info'>
            <i className='icon-info'>< MdOutlineMailOutline /></i>
            <p className='info-contact'>escalante@gmail.com</p>
        </div>
        <div className='contact-info'>
            <i className='icon-info'><ImLocation/></i>
            <p className='info-contact'>San Francisco 1753.Córdoba</p>
        </div>
    </div>
  )
}

export default CardsContact