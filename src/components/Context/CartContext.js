import { createContext, useState } from "react";


export const CartContext = createContext();


const CartContextProvider = ({children}) => {    

    const [carrito, setCarrito] = useState([]);

    const addToCart = (product, quantity) => {
        const addedItem = {...product, quantity};
    
        const isInCart = carrito.find((product) => product.id === addedItem.id);
    
        if(isInCart) {
            isInCart.quantity = quantity;
        }
        else {
            setCarrito([ ...carrito, addedItem ]);
        }
    }
    
    const cartQuantity = () => {
        return carrito.length;
    }
    
    const precioTotal = () => (
        carrito.reduce((acc, prod) => acc + (prod.price * prod.quantity), 0)
    )
    
    const emptyCart = () => {
        setCarrito([]);
    }

    return (
        <CartContext.Provider value={ {
            carrito, 
            addToCart, 
            cartQuantity, 
            precioTotal, 
            emptyCart
            } }> 
            {children}
        </CartContext.Provider>
    ) 

} 

export default CartContextProvider;



/*

const object = {
    name:
    price:
    quantity: 
}

*/