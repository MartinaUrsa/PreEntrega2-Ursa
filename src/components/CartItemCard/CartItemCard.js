import { useContext } from "react";
import "./_CartItemCard.scss";
import { CartContext } from "../Context/CartContext";


const CartItemCard = () => {

    const { carrito } = useContext(CartContext);

    
    return (
        <div>
            {
                    carrito.map((prod) => (
                        <div className="info-preview">
                            <img src={prod.pictureUrl}/>
                            <div key={prod.id} className="info-prod">
                                <h3 className="title">{prod.title}</h3>
                                <p>Precio unitario: ${prod.price}</p>
                                <p>Cantidad: {prod.quantity}</p>
                                <p>Precio total: ${prod.price * prod.quantity}</p>
                            </div>
                        </div>
                    ))
                    }
        </div>
    )
}

export default CartItemCard;