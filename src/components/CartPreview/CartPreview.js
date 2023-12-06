import "./_CartPreview.scss";
import TerminarCompra from "../TerminarCompra/TerminarCompra";

// React Icons
import { MdClose } from "react-icons/md";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const CartPreview = ({ toggleCartPreview }) => {

    const { carrito } = useContext(CartContext);

    return (
        <div className="cart-preview">
            <MdClose onClick={toggleCartPreview} className="close-cart-icon"/>

            <div className="cart-content">
                {
                    carrito.map((prod) => (
                        <div>
                            <h3 className="title">{prod.title}</h3>
                            <p>{prod.price * prod.quantity}</p>
                        </div>
                    ))
                }
            </div>

            <TerminarCompra className="terminar-compra"/>
        </div>
    )
}

export default CartPreview