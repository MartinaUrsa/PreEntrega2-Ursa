import './_CartWidget.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    return (
        <div className='cart'>
            <FontAwesomeIcon icon={faCartShopping} style={{color: "#000000",}} />
            <p>0</p>
        </div>
        
    );
};

export default CartWidget;