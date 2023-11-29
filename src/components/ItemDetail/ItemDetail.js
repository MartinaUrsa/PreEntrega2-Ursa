import { useNavigate } from "react-router-dom";
import { AddToCart } from "../ItemCount/ItemCount";
// Style
import "./_ItemDetail.scss";

const ItemDetail = ( {product} ) => {

    const {pictureUrl, altImg, title, price, description} = product;

    const navigate = useNavigate();

    return (
        <div className="item-detail-container">

            <div className="item-detail">
                <img src={pictureUrl} alt={altImg}/>

                <div className="item-info">
                    <h3>{title}</h3>
                    <p className="price">${price}</p>
                    <p className="description">{description}</p>

                    <div className="actions">
                        <AddToCart />
                        {/* Botón para volver a la página anterior */}
                        <button className="volver" onClick={() => navigate(-1)}>Volver</button>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default ItemDetail;