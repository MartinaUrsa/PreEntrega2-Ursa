// Style
import "./_ItemList.scss";
// Components
import ItemList from './ItemList.js';

import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

// Firebase
// collection nos permite traer una colección en particular de nuestra db
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config.js";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [titulo, setTitulo] = useState("Productos")
    const { category } = useParams();


    useEffect(() => {
        // Accedemos a la colección
        const productsRef = collection( db, "products" );
        const  q = category ? query(productsRef, where("category", "==", category)) : productsRef // where(campo a verificar, tipo de comparación, a qué queremos que compare)

        // getDocs() devuelve siempre una promesa
        getDocs(q)
            .then((res) => {
                setProducts(res.docs.map((doc) => (
                    {...doc.data(), id: doc.id}
                )));
                setLoading(false);
                setTitulo(category ? category : "Productos")
            })
    }, [category])

    return (
        <div>
            <div className='ItemListContainer'>   
                {loading ? "Cargando..." : <ItemList products={products} titulo={titulo}/>}
            </div>
        </div>
    )
}

export default ItemListContainer;