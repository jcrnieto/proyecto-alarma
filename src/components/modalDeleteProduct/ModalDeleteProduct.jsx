import './modalDeleteProduct.css';
import { useDeleteProduct } from '../../server-fetch/server';
import { useParams, useNavigate } from 'react-router-dom';


const ModalDeleteProduct = ({open, onClose}) => {
  const navigate = useNavigate();
  const { id } = useParams(); 
  // const deleteProduct = useDeleteProduct(id);
  const productDelete = () =>{
    useDeleteProduct(id);
    navigate("/admin")
  }
   
  return (
    <div className='container-modal-delete' open={open}>
         <h3 className='text-modal-delete'> Está seguro que desea eliminar el producto? </h3>
         <div className='button-modal-delete'>
            <button className='button-delete-modal' onClick={productDelete}>ELIMINAR</button>
            <button className='button-cancel-modal' onClick={onClose}>CANCELAR</button>
         </div>
    </div>
  )
}

export default ModalDeleteProduct