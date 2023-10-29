import './addProductAdmin.css';
import { useState } from 'react';
import { UseGetProducts } from '../../server-fetch/server';
import { useNavigate } from "react-router-dom";

const AddProductAdmin = () => {

    const navigate = useNavigate();
   
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        image:null
        });

    const handleInputChange = (e) => {
        const { name, value, files, type } = e.target;
       
        if(name === 'image' && type === 'file' && files.length > 0){
            setFormData({
              ...formData,
              [name]: files[0]
            });
          }
          else{
          setFormData({
             ...formData,
             [name]: value
         });
         console.log(value)
         }
    };

    const handleSubmit =async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('description', formData.description);
        formDataToSend.append('image', formData.image);
        console.log(formData.name, formData.description, formData.image)
        try {
            //const response = await fetch('http://localhost:3001/addProduct', {
              const response = await fetch('https://backend-alarma.onrender.com/addProduct', {
              method: 'POST',
              body: formDataToSend,
            });
        
            if (response.ok) {
              console.log('Solicitud POST exitosa');
             
            } else {
              console.error('Error en la solicitud POST');
              
            }
          } catch (error) {
            console.error('Error en la solicitud POST', error);
           
          }

        // console.log(useAddProduct(formData))
        // useAddProduct(formData);
        alert("Formulario creado con exito!");
        navigate("/admin");
        UseGetProducts();
    }

 return (
    <div className='container-addproduct'>
        <form className='form-addproduct' onSubmit={handleSubmit}>
        <span className="title-addproduct"> Envianos tu consulta</span>
        <input 
          className="input-addproduct"
        //   placeholder='Nombre'
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange} 
        />
        <input
          className="input-addproduct"
          placeholder='Inserte su imagen'
          type="file"
          name="image"
          accept="image/*"
          onChange={handleInputChange}
          
        /> 
        <input
          className="input-addproduct"
          placeholder='Descripcion del producto'
          type="text" 
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
        <input type="submit" className="submit-addproduct"/>
        </form>
    </div>
  )

}

export default AddProductAdmin