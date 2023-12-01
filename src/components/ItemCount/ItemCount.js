import './_ItemCount.scss';
import { useState } from "react";


// ItemCount
const ItemCount = ({product}) => {

    
    const [quantity, setQuantity] = useState(1);
    const [showAddToCart, setShowAddToCart] = useState(true);

    const checkStock = product.stock;

    // Creo funciones para poder sumar y restar la cantidad en ItemCount
    const handleClickResta = () => {
        quantity > 1 && setQuantity(quantity - 1);

        quantity == 1 && setShowAddToCart(true);
    }

    const handleClickSumar = () => {
        quantity < checkStock && setQuantity(quantity + 1);
    }

    const handleClickAddToCart  = () => {
        setShowAddToCart(false);
    }

    const AddToCart = () => {
        return <button className='add-cart-btn' onClick={handleClickAddToCart}>Agregar al carrito</button>
    }

    const ProductsQuantity = () => {
        return (
            <div className='cart-btn-div'>
                <button className="cart-btn" onClick={handleClickResta}>-</button>
                <span>{quantity}</span>
                <button className="cart-btn" onClick={handleClickSumar}>+</button>
            </div>
        )
    }

    const whatToRender = () => {
        if(checkStock >= 1) {
            return (showAddToCart ? <AddToCart /> : <ProductsQuantity />)
        }
        else {
            return <div className='sin-stock'>Sin stock</div>
        }
    }


    return (
        <div>
            <div>{whatToRender()}</div>
        </div>
    );
}

export default ItemCount;