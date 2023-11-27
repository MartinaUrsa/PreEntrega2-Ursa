import { useEffect, useState } from "react";
import data from "../../data/data.json";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const { itemId } = useParams();

    const getProductById = (itemId) => {
        return new Promise((resolve) => {
            const item = (data.find((prod) => prod.id === itemId))
            resolve(item);
        });
    }

    useEffect(() => {
        getProductById(Number(itemId))
            .then((res) => {
                setProduct(res);
        })
    }, []);

    return (
        <div className="ItemDetailContainer">
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer