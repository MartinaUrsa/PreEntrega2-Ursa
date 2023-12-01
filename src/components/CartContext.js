import { createContext } from "react";
import data from "../data/data.json";
import AddToCartBtn from "./ItemCount/ItemCount";

export const CartContext = createContext();


const CartContextProvider = () => {
    
    const carrito = [];
    
    // addItem
    const addItem = ( item, quantity ) => {

        }
    } 


    // removeItem
    const removeItem = ( itemId ) => {

    } 

    // clearCart
    const clearCart = () => {

    } 


    // isInCart
    const isInCart = () => {

    }

export default CartContextProvider;



/*

const object = {
    name:
    price:
    quantity: 
}

*/