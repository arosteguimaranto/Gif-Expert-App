//primero react

// luego terceros
import { GifItem } from "./GifItem";
// por ultimo nuestro codigo
//import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {

  const{images, isLoading} = useFetchGifs(category);
  
  console.log({ isLoading});
  
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
