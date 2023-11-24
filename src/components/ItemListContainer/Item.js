// Style
import "./_ItemList.scss";

const Item = ({id, pictureUrl, altImg, title, price, stock}) => {

    return (
        <div className="item">
            <img src={pictureUrl} alt={altImg}/>
            <h3>{title}</h3>
            <p>${price}</p>
        </div>
    )
};

export default Item;