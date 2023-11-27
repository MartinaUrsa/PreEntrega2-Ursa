import ItemListContainer from "../../components/Items/ItemListContainer";

const Productos = () => {
    return (
        <div>
            <div className="products-title">
                <h2>Nuestros productos</h2>
                <div className="line"></div>
            </div>
            <ItemListContainer />
        </div>
    )
}

export default Productos;