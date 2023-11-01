import './productId.css';
import { useParams } from 'react-router-dom';
import { useGetIdProduct } from "../../server-fetch/server";
import { Link } from "react-router-dom";

const ProductId = () => {

    const { id } = useParams();
    const { data } = useGetIdProduct(id);
    //console.log(data.name)
  return (
    <div className='container-productid'>
         <div className='card-productid' key={data.id}>
            <div className='image-productid'>
              <img src={data.image} alt="imagen producto" className='productid-image'/>
            </div>
            <div className='description-productid'>
              <h1>{data.name}</h1>
              <p>{data.description}</p>
             <Link to='/contact'>
              <button>Consultar Precio</button>
             </Link>
            </div> 
         </div>
    </div>
  )
}

export default ProductId