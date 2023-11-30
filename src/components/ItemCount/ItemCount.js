import './_ItemCount.scss';
import { useState } from "react";


// ItemCount
const ItemCount = () => {
    
    // Desestructuro el hook useState para poder manipular los estados del botón ItemCount
    const [count, setCount] = useState(1);
    const [showAddToCart, setShowAddToCart] = useState(true);

    // Creo funciones para poder sumar y restar la cantidad
    const handleClickResta = () => {
        if(count > 0) {
            setCount(count - 1)
        }

        if(count == 1) {
            setShowAddToCart(true)
        }
    }

    const handleClickAddToCart  = () => {
        setCount(1);
        setShowAddToCart(false);
    }

    const whatToRender = () => {
        if(showAddToCart) {
            return <button className='add-cart-btn' onClick={handleClickAddToCart}>Agregar al carrito</button>
        }
        else {
            return (
                <div className='cart-btn-div'>
                    <button className="cart-btn" onClick={handleClickResta}>-</button>
                    <span>{count}</span>
                    <button className="cart-btn" onClick={() => setCount(count + 1)}>+</button>
                </div>
            )
        }
    }

    return (
        <div>
            {whatToRender()}
        </div>
    );
}
export { ItemCount };