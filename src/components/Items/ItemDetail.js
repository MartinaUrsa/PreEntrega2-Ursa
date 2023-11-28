import { Link } from "react-router-dom";
import { AddToCart } from "../ItemCount/ItemCount";
// Style
import "./_ItemDetail.scss";

const ItemDetail = ( {product} ) => {

    return (
        <div className="item-detail-container">

            <div className="categoryBtns">
                <button className='categoryBtn'><Link to="/productos">Todos</Link></button>
                <button className='categoryBtn'><Link to="/productos/hogar&jardin">Hogar & Jardín</Link></button>
                <button className='categoryBtn'><Link to="/productos/imanes">Imanes</Link></button>
            </div>

            <div className="item-detail">
                <img src={product.pictureUrl} alt={product.altImg}/>

                <div className="item-info">
                    <h3>{product.title}</h3>
                    <p className="price">${product.price}</p>
                    <p>{product.description}</p>

                    <div className="actions">
                        <AddToCart />
                        <button className="volver"><Link to={`/productos/${product.category}`}>Volver</Link></button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
};

export default ItemDetail;