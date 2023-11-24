import Item from "../../components/ItemListContainer/Item";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

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