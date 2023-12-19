// Style
import "./_CategoryBtns.scss";

import { Link } from "react-router-dom"
// import data from "../../data/data.json";
import { useEffect, useState } from "react";

// Firebase
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";


const FilterCategoryBtn = () => {

    const [categories, setCategories] = useState([]);

    const productsRef = collection( db, "products" );

    useEffect(() => {
        getDocs(productsRef)
            .then((res) => {
                const allCategories = res.docs.reduce((categories, doc) => {

                    const category = doc.data().category;

                    if(category && !categories.includes(category)) {
                        categories.push(category);
                    }
                    return categories;
                }, [])

                setCategories(["Todos", ...allCategories])
            });
    }, [categories]);

    
    return (
        <div className="categoryBtns">
            {categories.map((category) => {
                    if (category === "Todos") {
                        return <button className="categoryBtn"><Link to={`/productos`}>{category}</Link></button>
                    }
                    else {
                        return <button className="categoryBtn"><Link to={`/productos/${category}`}>{category}</Link></button>
                    }
            })}
        </div>
    )
}

export default FilterCategoryBtn;


