import { AddToCart } from "../ItemCount/ItemCount";

const ItemDetail = ( {product} ) => {

    return (
        <div className="item-detail">
            <div className="item-main-info">
                <h3>{product.title}</h3>
                <img src={product.pictureUrl} alt={product.altImg}/>
            </div>
            <div className="item-extra-info">
                <p>${product.price}</p>
                <p>${product.description}</p>
            </div>

            <AddToCart />
        </div>
    )
};

export default ItemDetail;