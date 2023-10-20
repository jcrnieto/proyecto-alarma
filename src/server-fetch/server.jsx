import { useState, useEffect  } from 'react';


export const UseGetProducts = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    fetch('http://localhost:3001/getProducts')
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

export const useDeleteProduct = async(id) => {

  try {
    await fetch(`http://localhost:3001/deleteProduct/${id}`, {
      method: 'DELETE',
    }); 

  } catch (error) {
     console.log(error)
   }
}

export const useUpdateProduct = () => {

}

export const useAddProduct = () => {

}

export const useGetIdProduct = (id) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  fetch('http://localhost:3001/getIdProduct/' + id)
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