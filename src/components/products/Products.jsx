import './products.css';
import img from '../../image/img-alarma.jpg';
import { UseGetProducts } from '../../server-fetch/server';
import { Link } from "react-router-dom";

const Products = () => {

  const { data, loading } = UseGetProducts();

  if (loading) {
    return <div className="container-loading">Cargando...</div>;
  }

  if (data.length === 0) {
    return <div className="container-notproduct">No hay productos disponibles.</div>;
  }
  // console.log(data)
  return (
    <div className="container-products">
      <div className='container-portada'>
        <img src={img} alt="" className='img-portada' />
        <div className='container-title-portada'>
          <h1 className='title-portada'> Productos </h1>
        </div>

        <div className='container-cards'>
          {
            data.map(product => (
              <Link to={'/productId/' + product.id} className='link-admin' key={product.id}>
                <div className='container-card' key={product.id}>
                  <img src={product.image} alt="imagen" className='img-card' />
                  <p className='name-card'>{product.name}</p>
                </div>
              </Link>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Products;