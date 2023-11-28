import Item from "./Item";
import "./_ItemList.scss";
import { Link } from "react-router-dom";

const ItemList = ( {products, titulo} ) => {

    return (
        <div>
            <div className="categoryBtns">
                <button className='categoryBtn'><Link to="/productos">Todos</Link></button>
                <button className='categoryBtn'><Link to="/productos/hogar&jardin">Hogar & Jardín</Link></button>
                <button className='categoryBtn'><Link to="/productos/imanes">Imanes</Link></button>
            </div>

            <h2>{titulo}</h2>
            <div className="items-container">
                {
                    products.map((product) => {
                        return (
                            <Item key={product.id} product={product}/>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default ItemList;


