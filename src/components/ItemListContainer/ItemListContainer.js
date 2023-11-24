// Components
import ItemList from './ItemList.js';
// Data
import itemsData from "../../data/data.json";



const ItemListContainer = () => {
    return (
        <div>            
            <ItemList items={itemsData}/>
        </div>
    )
}

export default ItemListContainer;