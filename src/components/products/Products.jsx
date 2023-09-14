import './products.css';
import img from '../../image/img-alarma.jpg';

const Products = () => {
  return (
    <div className="container-products">
        <div className='container-portada'>
         <img src={img} alt="" className='img-portada'/>
         <div className='container-title-portada'>
         <h1 className='title-portada'> Productos </h1>
         </div>
      </div>
    </div>
  )
}

export default Products;