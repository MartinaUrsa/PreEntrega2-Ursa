import './_CartWidget.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import CartPreview from '../CartPreview/CartPreview';

const CartWidget = () => {

    const [isPreviewOpen, setPreviewOpen] = useState(false);

    const { cartQuantity } = useContext(CartContext);

    const toggleCartPreview = () => {
        setPreviewOpen(!isPreviewOpen);
    }

    return (
        <div>
            <div className='cart-widget' onClick={toggleCartPreview}>
                <FontAwesomeIcon icon={faCartShopping} style={{color: "#000000",}} />
                <p>{cartQuantity()}</p>
            </div>
            {isPreviewOpen && <CartPreview toggleCartPreview={toggleCartPreview}/>}
        </div>

        
    );
};

export default CartWidget;