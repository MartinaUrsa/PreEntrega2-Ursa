import './_ItemCount.scss';
import { useState } from "react";

const ItemCount = () => {

    // Desestructuro el hook useState para poder manipular los estados del botón
    const [count, setCount] = useState(0);

    // Creo funciones para poder sumar y restar la cantidad
    const handleClickResta = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div className='cart-btn-div'>
            <button className="cart-btn" onClick={handleClickResta}>-</button>
            <span>{count}</span>
            <button className="cart-btn" onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
}

const AddToCart = () => {
    return (
        <button className='add-cart-btn'>Agregar al carrito</button>
    )
}

export { ItemCount, AddToCart };
