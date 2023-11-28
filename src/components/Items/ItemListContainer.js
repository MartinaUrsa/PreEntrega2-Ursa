// Style
import "./_ItemList.scss";
// Components
import ItemList from './ItemList.js';
// Data
import data from "../../data/data.json";

import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [titulo, setTitulo] = useState("Productos")

    const category = useParams().category;
    console.log(category);


    const getProductsFromData = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data)
            }, 500)
        })
    }


    useEffect(() => {
        getProductsFromData()
            .then((res) => {
                if(category) {
                    setTitulo(category)
                    setProducts(res.filter((prod) => prod.category === category));
                    setLoading(false);
                }
                else {
                    setTitulo("Productos")
                    setProducts(res);
                    setLoading(false);
                }
            });
    }, [category])

    return (
        <div className='ItemListContainer'>   
            {loading ? "Cargando..." : <ItemList products={products} titulo={titulo}/>}
        </div>
    )
}

export default ItemListContainer;