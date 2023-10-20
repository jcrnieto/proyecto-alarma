import "./admin.css";
import { UseGetProducts } from "../../server-fetch/server";
import { Link } from "react-router-dom";

const Admin = () => {
  const { data, loading } = UseGetProducts();
  
if (loading) {
    return <div>Cargando...</div>;
  }

  if (data.length === 0) {
    return <div>No hay productos disponibles.</div>;
  }

  return (
    <div className="container-admin">
      {
        data.map((product) =>
          <div key={product.id} className='card-admin'>
            <Link className='link-admin' to={'/productIdAdmin/' + product.id} >
              <div className='container-id-admin'>
                <div className='container-button-img'>
                  <img src={product.image} alt="" className='img-admin' />
                </div>
                <h2 className='title-admin'> {product.name} </h2>
                <p className='description-admin'> {product.description} </p>
              </div>
            </Link>
          </div>
        )}
    </div>
  )
}

export default Admin