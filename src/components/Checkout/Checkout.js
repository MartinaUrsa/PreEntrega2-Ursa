import "./_Checkout.scss";

import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const Checkout = () => {

    const [ orderId, setOrderId ] = useState("");

    const navigate = useNavigate();

    const { carrito, precioTotal, emptyCart } = useContext(CartContext);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const terminarCompra = (data) => {
        const order = {
            cliente: data, 
            productos: carrito,
            total: precioTotal()
        };

        const orderRef = collection(db, "orders");

        addDoc(orderRef, order) // la referencia a la colección y qué queremos enviar
            .then((doc) => {
                setOrderId(doc.id);
                emptyCart();
            })
    }

        if(orderId) {
            return (
                <div className="container">
                    <h2>¡Muchas gracias por tu compra!</h2>
                    <p>Tu n° de orden es: {orderId}</p>
                </div>
            )
        }

    return (
        <div class="container">
            <h2>Finalizar compra</h2>
            <form className="form" onSubmit={handleSubmit(terminarCompra)}>
                <div class="user-details">
                    <div class="input-box">
                        <label for="name">Nombre:</label>
                        <input 
                            type="text" 
                            {...register("name", { required: "Campo requerido" })} 
                            placeholder="Ingrese su nombre" 
                            id="name" />    
                            {errors.name && <p style={{color: "red", fontSize: "13px", fontWeight: "500"}}>{errors.name.message}</p>}
                    </div>
                    
                    <div class="input-box">
                        <label for="last-name">Apellido:</label>
                        <input 
                            type="text" 
                            {...register("lastName", { required: "Campo requerido" })} 
                            placeholder="Ingrese su apellido" 
                            id="last-name" />
                            {errors.lastName && <p style={{color: "red", fontSize: "13px", fontWeight: "500"}}>{errors.lastName.message}</p>}
                    </div>      

                    <div class="input-box">
                        <label for="mail">Mail:</label>
                        <input 
                            type="email" 
                            {...register("email", { required: "Campo requerido" })} 
                            placeholder="ejemplo@ejemplo.com" 
                            id="mail"
                            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"/>
                            {errors.email && <p style={{color: "red", fontSize: "13px", fontWeight: "500"}}>{errors.email.message}</p>}
                    </div>

                    <div class="input-box">
                        <label for="repeat-mail">Repetir mail:</label>
                        <input 
                            type="email" 
                            {...register("repeatEmail", { required: "Campo requerido", validate: (value) => value === watch("email") || "Los correos ingresados no coinciden" })} 
                            placeholder="ejemplo@ejemplo.com" 
                            id="repeat-mail" 
                            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"/>
                            {errors.repeatEmail && <p style={{color: "red", fontSize: "13px", fontWeight: "500"}}>{errors.repeatEmail.message}</p>}   
                    </div>

                    <div class="input-box">
                        <label for="tel">Teléfono / Celular:</label>
                        <input 
                            type="tel" 
                            {...register("phone", { required: "Campo requerido" })} 
                            placeholder="+54 9 11 1111 1111" 
                            id="tel" />    
                            {errors.phone && <p style={{color: "red", fontSize: "13px", fontWeight: "500"}}>{errors.phone.message}</p>}
                    </div>
                </div>
                <button className="submit-btn" type="submit">Hacer pedido</button>
                <button className="volver" onClick={() => navigate(-1)}>Volver</button>
            </form>
        </div>
    )
}

export default Checkout