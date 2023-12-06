import './_ItemCount.scss';

// ItemCount
const ItemCount = ({quantity, handleClickResta, handleClickSuma, handleAddToCart}) => {

    const ItemCount = () => {
        return (
            <div className='cart-actions-container'>
                <div className='cart-btn-div'>
                    <button className="cart-btn" onClick={handleClickResta}>-</button>
                    <span>{quantity}</span>
                    <button className="cart-btn" onClick={handleClickSuma}>+</button>
                </div>

                <button className='add-cart-btn' onClick={handleAddToCart}>Agregar al carrito</button>
            </div>
        )
    }

    return (
        <ItemCount />
    );
}

export default ItemCount;