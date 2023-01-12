
import { getGifs } from "../helpers/getGifs";



export const GifGrid = ({ category }) => {


  // Lo mando a llamar

  getGifs(category);


  return (

    <>
      <h3>{category}</h3>

    </>
  )
}
