import './company.css';
import img from '../../image/img-alarma.jpg'

const Company = () => {
  return (
    <div className="container-company">
      <div className='container-portada'>
         <img src={img} alt="" className='img-portada'/>
         <div className='container-title-portada'>
         <h1 className='title-portada'>Sobre Nosotros</h1>
         </div>
      </div>
    </div>
  )
}

export default Company