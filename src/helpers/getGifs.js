/* Una buena practica para que nuestro
componente no este reprocesando esta funcion */

//creamos una funcion 
 export const getGifs = async (category) => {

    //creamos una constante que va a ser el url
    const url = `https://api.giphy.com/v1/gifs/search?api_key=5IUjJkoXSjUwWa9FPK8iTae8qJGUfeK9&q=${category}&limit=12`;
    // creamos la peticion http
    const resp = await fetch(url);
    //destructurando la data
    const { data } = await resp.json();
  
    const gifs = data.map(img => ({
  
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
  
    }));
  
  
   
    return gifs;
    //console.log(data);
  }
  