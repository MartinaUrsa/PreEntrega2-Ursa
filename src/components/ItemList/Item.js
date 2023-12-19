import { Link } from "react-router-dom";
// Style
import "./_ItemList.scss";

const Item = ({product}) => {

    return (
        <Link to={`/productos/${product.category}/${product.id}`} className="item" key={product.id}>
            <img src={product.pictureUrl} alt={product.altImg}/>
            <h3>{product.nombre}</h3>
            <p>${product.precio}</p>
        </Link>
    )
};

export default Item;