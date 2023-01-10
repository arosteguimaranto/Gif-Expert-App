import { useState } from "react"


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

 const onAddCategory = () =>{
    
    setCategories([...categories, 'valorant']);

 }



    return (
        <>
            {/* titulo*/}
            <h1> Gif Expert App </h1>

            {/* input */}

            {/* listado de Gif */}

            <button onClick={onAddCategory}>Agregar</button>
            <ol>
            
            {categories.map( category => {
                return <li key={ category }> {category} </li>
            })}
        
            </ol>

            {/* Gif item */}

        </>
    )
}