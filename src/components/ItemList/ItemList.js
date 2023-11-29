import { Link } from "react-router-dom";
// Style
import "./_ItemList.scss";
// Components
import Item from "./Item";
import FilterCategoryBtn from "../FilterCategoryBtn/FilterCategoryBtn";

const ItemList = ( {products, titulo} ) => {

    return (
        <div>
            <div className="categoryTitle">
                <h3>{titulo}</h3>
                <div className="line"></div>
            </div>

            <FilterCategoryBtn />

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


