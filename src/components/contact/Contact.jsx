import './contact.css';
import img from '../../image/img-alarma.jpg';

const Contact = () => {
  return (
    <div className="container-contact">
       <div className='container-portada'>
         <img src={img} alt="" className='img-portada'/>
         <div className='container-title-portada'>
         <h1 className='title-portada'> Contacto</h1>
         </div>
      </div>
    </div>
  )
}

export default Contact;