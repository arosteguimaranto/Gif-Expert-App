import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, [])




    return {
        //cuando teenemos una propiedad que apunta a una propiedad que apunta
        //a una variable del mismo nombre se escribe nadamas 
        //la variable
        images,
        isLoading

    }

}
