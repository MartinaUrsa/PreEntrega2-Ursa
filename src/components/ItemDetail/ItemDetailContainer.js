import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

// Firebase
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const { itemId } = useParams();

    useEffect(() => {
        const docRef = doc(db, "products", itemId)
        getDoc(docRef)
            .then((res) => {
                setProduct(
                    {...res.data(), id: res.id}
                );
            })
    }, [itemId]);

    return (
        <div className="ItemDetailContainer">
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer