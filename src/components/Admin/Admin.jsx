import "./admin.css";
import { UseGetProducts } from "../../server-fetch/server";
import { Link } from "react-router-dom";

const Admin = () => {
  const { data, loading } = UseGetProducts();

 
  if (loading) {
    return <div className="container-loading">Cargando...</div>;
  }

  if (data.length === 0) {
    return <div className="container-notproduct">No hay productos disponibles.</div>;
  }

  return (
    <div className="container-admin-product">
      <div className="buttom-addproduct-admin">
         <Link to={'/admin/addProductAdmin'} >
           <button >Agregar Producto</button>
         </Link>
      </div>
      {
        data.map((product) =>
          <div key={product.id} className='card-admin'>
            <Link className='link-admin' to={'/productIdAdmin/' + product.id} >
              <div className='container-id-admin'>
                <div className='container-img-product'>
                  <img src={product.image} alt="" className="img-admin"/>
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