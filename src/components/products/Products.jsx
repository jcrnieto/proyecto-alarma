import './products.css';
import img from '../../image/img-alarma.jpg';
import products from '../../products';

const Products = () => {
  console.log(products)
  return (
    <div className="container-products">
        <div className='container-portada'>
         <img src={img} alt="" className='img-portada'/>
         <div className='container-title-portada'>
         <h1 className='title-portada'> Productos </h1>
         </div>

         <div className='container-cards'>
            {
              products.map( product =>(
                <div className='container-card'>
                     <img src={product.image} alt="imagen" className='img-card'/>
                     <p className='name-card'>{product.name}</p>
                </div>
              ))
            }
         </div>
      </div>

    </div>
  )
}

export default Products;