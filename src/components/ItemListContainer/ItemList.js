import Item from "./Item";
import "./_ItemList.scss";


const ItemList = ({items}) => {

    const renderedItems = items.map((item) => {
        return <Item key={item.id} pictureUrl={item.pictureUrl} altImg={item.altImg} title={item.title} price={item.price}/>
    })

    return <div className="items-container">{renderedItems}</div>
};

export default ItemList;


