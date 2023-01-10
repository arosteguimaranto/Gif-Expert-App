import { useState } from "react"
import { AddCategory } from "./components/AddCategory";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

 const onAddCategory = () =>{
    
    setCategories(['Valorant', ...categories]);

 }



    return (
        <>
            {/* titulo*/}
            <h1> Gif Expert App </h1>

            {/* input */}
            <AddCategory setCategories={setCategories}/>
            {/* listado de Gif */}

            
            <ol>
            
            {categories.map( category => {
                return <li key={ category }> {category} </li>
            })}
        
            </ol>

            {/* Gif item */}

        </>
    )
}