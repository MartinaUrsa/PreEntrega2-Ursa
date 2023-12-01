import { useNavigate } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount.js";
// Style
import "./_ItemDetail.scss";
import TerminarCompra from "../TerminarCompra/TerminarCompra.js";


const ItemDetail = ( {product} ) => {

    const {pictureUrl, altImg, title, price, description, stock} = product;

    const navigate = useNavigate();

    return (
        <div className="item-detail-container">

            <div className="item-detail">
                <img src={pictureUrl} alt={altImg}/>

                <div className="item-info">
                    <h3>{title}</h3>
                    <p className="price">${price}</p>
                    <p className="description">{description}</p>

                    <div className="actions-container">
                        <div className="actions">
                            <ItemCount product={product}/>
                            {/* Botón para volver a la página anterior */}
                            <button className="volver" onClick={() => navigate(-1)}>Volver</button>
                        </div>
                        <TerminarCompra />
                    </div>
                </div>
            </div>

        </div>
    )
};

export default ItemDetail;