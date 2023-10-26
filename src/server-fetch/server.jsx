import { useState, useEffect  } from 'react';


export const UseGetProducts = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
   
    useEffect(() => {
    //fetch('http://localhost:3001/getProducts')
    fetch('/getProducts')
    .then((response) => response.json())
    .then((data) => {
      setData(data);
      setLoading(false);
     
    })
    .catch((error) => {
      console.error('Error:', error);
      setLoading(false);
    });
  }, []);

    return {
        data,
        loading
    }
}

export const useDeleteProduct =async (id) => {

   try {
      //await fetch(`http://localhost:3001/deleteProduct/${id}`, {
      await fetch(`/deleteProduct/${id}`, {  
        method: 'DELETE',
      }); 
  
    } catch (error) {
       console.log(error)
     }
      
 }

export const useUpdateProduct = () => {

}

// export const useAddProduct = (formData) => {
//   //console.log('esto es server',formData)
//   fetch('http://localhost:3001/addProduct', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json', 
//     },
//      body: JSON.stringify(formData), 
//      })
//     .then((response) => {
//       if (response.ok) {
//          console.log('Solicitud POST exitosa');
//       } else { 
//          console.error('Error en la solicitud POST',);
//       }
//     })
//     .catch((error) => { 
//        console.error('Error en la solicitud POST', error);
//     });
// }

export const useGetIdProduct = (id) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  //fetch('http://localhost:3001/getIdProduct/' + id)
  fetch('/getIdProduct/' + id)
  .then((response) => response.json())
  .then((data) => {
    setData(data);
    setLoading(false);
  })
  .catch((error) => {
    console.error('Error:', error);
    setLoading(false);
  });
}, [id]);

  return {
      data,
      loading
  }
} 