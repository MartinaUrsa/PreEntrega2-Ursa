import Item from "./Item";
import "./_ItemList.scss";


const ItemList = ( {products} ) => {

    return (
        <div className="items-container">
            {
                products.map((product) => {
                    return (
                        <Item key={product.id} product={product}/>
                    )
                })
            }
        </div>
    )
};

export default ItemList;


