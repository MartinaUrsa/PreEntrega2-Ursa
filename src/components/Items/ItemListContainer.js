// Components
import ItemList from './ItemList.js';
// Data
import data from "../../data/data.json";

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

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
                    setProducts(res.filter((prod) => prod.category === category));
                    setLoading(false);
                }
                else {
                    setProducts(res);
                    setLoading(false);
                }
            });
    }, [category])

    return (
        <div className='ItemListContainer'>            
            {loading ? "Cargando..." : <ItemList products={products}/>}
        </div>
    )
}

export default ItemListContainer;