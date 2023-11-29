// Style
import "./_CategoryBtns.scss";

import { Link } from "react-router-dom"
import data from "../../data/data.json";
import { useEffect, useState } from "react";

const FilterCategoryBtn = () => {

    const [categories, setCategories] = useState([]);

    const categorias = [];

    data.forEach((item) => categorias.push((item.category)));


    useEffect(() => {
        const filteredCategories = categorias.reduce(( values, category ) => {
            if(!values.includes(category)) {
                values.push(category)
            };
            return values;
        }, ['Todos']);

        setCategories(filteredCategories); // determino cuáles son las categorías que quiero usar
    }, []);


    return (
        <div className="categoryBtns">
            {categories.map((category) => {
                    if (category == "Todos") {
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


