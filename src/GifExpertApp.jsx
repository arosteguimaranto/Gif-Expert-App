import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;


        setCategories([newCategory, ...categories]);
        //setCategories([newCategory, ...categories]);
    }

    return (
        <>
            {/* titulo*/}
            <h1> Gif Expert App </h1>


            {/* input */}
            <AddCategory
                // setCategories={setCategories}
                onNewCategory={(value) => onAddCategory(value)}
            />


            {/* listado de Gif */}


            {
                categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))

            }

            {/* Gif item */}


        </>
    )
}