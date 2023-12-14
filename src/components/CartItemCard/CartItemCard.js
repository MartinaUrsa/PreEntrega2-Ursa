import { useContext } from "react";
import "./_CartItemCard.scss";
import { CartContext } from "../Context/CartContext";

import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";


const CartItemCard = () => {
    
    const { carrito, deleteItem } = useContext(CartContext);

    
    return (
        <div>
            {
                carrito.map((prod) => (
                    <Link to={`/productos/${prod.category}/${prod.id}`}>
                        <div className="info-preview" key={prod.id}>
                            <img src={prod.pictureUrl}/>
                            <div key={prod.id} className="info-prod">
                                <h3 className="title">{prod.title}</h3>
                                <p>Precio unitario: ${prod.price}</p>
                                <p>Cantidad: {prod.quantity}</p>
                                <p>Precio total: ${prod.price * prod.quantity}</p>
                            </div>
                            <MdClose onClick={() => deleteItem(prod)} className="delete-item-icon"/>
                        </div>
                    </Link>

                ))
            }
        </div>
    )
}

export default CartItemCard;