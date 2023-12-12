import CartItemCard from "../../components/CartItemCard/CartItemCard";
import { CartContext } from "../../components/Context/CartContext";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useContext } from 'react'

import "./_Cart.scss";


const Cart = () => {

    const { carrito, precioTotal, emptyCart } = useContext(CartContext);

    const handleEmptyCart = () => {
        emptyCart();
    }

    return (
        <div className="cart-container">
            <div className="cart-header">
                <div className="cart-title">
                    <MdOutlineShoppingBag />
                    <p>Mi Carrito</p>
                </div>
                <button className="vaciar-carrito" onClick={handleEmptyCart}>Vaciar carrito</button>
            </div>

            { carrito.length === 0 ? "Parece que no hay nada en el carrito aún." : (
                <div>
                    <CartItemCard />
                    <div className="checkout-btns">
                        <div className="cart-total">Total carrito: ${precioTotal()}</div>
                        <button className="checkout">Ir a pagar</button>
                    </div>
                </div>
            ) }
        </div>
    )
}

export default Cart