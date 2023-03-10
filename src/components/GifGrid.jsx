//primero react
import {PropTypes} from 'prop-types'

// luego terceros
import { GifItem } from "./GifItem";
// por ultimo nuestro codigo
//import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {

  const{images, isLoading} = useFetchGifs(category);
  
  
  return (

    <>
      <h3>{category}</h3>
      {
        isLoading
        && (<h2> Cargando... </h2>)
       
        
      }
     

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

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}