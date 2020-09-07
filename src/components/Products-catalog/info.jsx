import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';



const Information = () => {

  const [information, setInformation] = useState([]);
  const {id} = useParams();
  

  useEffect(() => {
    

    const compuMerch = `https://api.sheety.co/b032d050fe95c4bd74ce568d32973258/hojaProductos/hoja1/${id}`;
    fetch(compuMerch)
      .then((res) => res.json())
      .then((data) => {
        setInformation(data);
      });
  }, []);
  
  

    return(
        <div>
         <h1>{information.name}</h1>
        </div>
    )
}

export default Information;
