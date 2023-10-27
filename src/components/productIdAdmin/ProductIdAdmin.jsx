import React, { useState } from 'react';
import ModalDeleteProduct from '../modalDeleteProduct/ModalDeleteProduct';
import { useGetIdProduct } from "../../server-fetch/server";
import { useParams } from 'react-router-dom';
import './productIdAdmin.css';

const ProductIdAdmin = () => {

    const { id } = useParams();
    const { data, loading } = useGetIdProduct(id);
    const [modalOpen, setModalOpen] = useState(false);

    const handleDeleteClick = () => {
        setModalOpen(true);
    };

    return (
        <div className='container-admin'>
            <div className='container-button-img'>
                <img src={data.image} alt="" className='img-idadmin' />
                <div className='container-button-admin'>
                    <button className='button-delete' onClick={handleDeleteClick}> Eliminar Producto</button>
                    <button className='button-update' > Actualizar Producto</button>
                </div>
            </div>
            <h2 className='title-admin'> {data.name} </h2>
            <p className='description-admin'> {data.description} </p>
            {
                modalOpen && (
                    <ModalDeleteProduct onClose={() => setModalOpen(false)} />
                )}
        </div>
    )
}

export default ProductIdAdmin