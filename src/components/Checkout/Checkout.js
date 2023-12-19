import "./_Checkout.scss";

const Checkout = () => {
    return (
        <div>
            <input placeholder="Nombre"  required></input>
            <input placeholder="Apellido" required></input>
            <input placeholder="Email" required></input>
            <input placeholder="Repetir email" required></input>
        </div>
    )
}

export default Checkout