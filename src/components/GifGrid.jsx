//primero react
import {useEffect, useState} from "react";
// luego terceros
import { GifItem } from "./GifItem";
// por ultimo nuestro codigo
import { getGifs } from "../helpers/getGifs";



export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([]);

  const getImages = async() =>{
    const newImages = await getGifs(category);
    setImages(newImages);
  }

  useEffect(() => {
    getImages();
  }, [])
  
  return (

    <>
      <h3>{category}</h3>

      <div className="card-grid">
        {
          images.map((image) => (
           <GifItem 
           key={image.id}
           //esparcir propiedades de un objeto
           //utilizando el spreed operator
           {...image }
           />
          ))
        }
      
      </div>

      
    </>
  )
}
