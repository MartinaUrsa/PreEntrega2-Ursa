import { createContext, useState } from "react";


export const CartContext = createContext();

const CartContextProvider = ({children}) => {    

    const [carrito, setCarrito] = useState([]);

    const onAdd = (product, quantity) => {
        const addedItem = {...product, quantity};
    
        const isInCart = carrito.find((product) => product.id === addedItem.id);
    
        if(isInCart) {
            isInCart.quantity = quantity;
        }
        else {
            setCarrito([ ...carrito, addedItem ]);
        }
    }

    const deleteItem = (prod) => {
        setCarrito(
            carrito.filter(a =>
            a.id !== prod.id)
        );
    }

    const cartQuantity = () => {
        return carrito.reduce((acc, prod) => acc + prod.quantity, 0);
    }    

    
    const precioTotal = () => (
        carrito.reduce((acc, prod) => acc + (prod.precio * prod.quantity), 0)
    )
    
    const emptyCart = () => {
        setCarrito([]);
    }

    return (
        <CartContext.Provider value={ {
            carrito, 
            onAdd, 
            cartQuantity, 
            precioTotal, 
            emptyCart,
            deleteItem
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