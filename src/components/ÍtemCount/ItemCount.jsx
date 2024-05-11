

import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({handleAddToCart, stock}) => {
const [count, setCount] = useState(1);

const handleAdd = () => {
    if (count < stock){
        setCount(count + 1);
    }    
};

const handleSubtract = () => {
    if (count > 1){
        setCount(count - 1);
    }
};

return (
    <div className="item-count-container">
        <div className="item-count-buttons">
            <button onClick={handleSubtract}>-</button>
            <p>{count}</p>
            <button onClick={handleAdd}>+</button>
        </div>
        <div>
            <button onClick={() => handleAddToCart(count)}>Agregar al carrito</button>
        </div>
    </div>
);
};

export default ItemCount;
