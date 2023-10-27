import "./admin.css";
import { UseGetProducts } from "../../server-fetch/server";
import { Link } from "react-router-dom";

const Admin = () => {
  const { data, loading } = UseGetProducts();

  // const imageStyle = {
  //   maxWidth: '100%',
  //   marginLeft: '25%',
  // };
  
if (loading) {
    return <div>Cargando...</div>;
  }

  if (data.length === 0) {
    return <div>No hay productos disponibles.</div>;
  }

  return (
    <div className="container-admin">
      <div>
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
                  <img src={product.image} alt="" className="img-admin" 
                     style={{
                       maxWidth: '100%',
                       marginLeft: '15%'
                      }}/>
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