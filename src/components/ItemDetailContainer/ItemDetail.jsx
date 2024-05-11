import React, { useContext, useState } from "react";
import ItemCount from "../ÍtemCount/ItemCount";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
    const { cart, addToCart } = useContext(CartContext);
    const [clickAdd, setClickAdd] = useState(false)

    const handleAddToCart = (count) => {
        

        const productCart = { ...product, quantity: count };
        addToCart(productCart);
        setClickAdd(true)
    };

    return (
        <div className="item-detail">
            <div className="item-detail-info">
                <h1 className="item-detail-title">{product.name}</h1>
                <p className="item-detail-description">{product.description}</p>
                <p className="item-detail-price">Precio por unidad: ${product.price}</p>
                {
                    clickAdd ? <Link to="/cart" className="carts-checkout">Ir al carrito</Link> : <ItemCount handleAddToCart={handleAddToCart} stock={product.stock} />
                }
                
            </div>
            <div className="item-detail-image">
                <img src={product.image} alt={product.name} />
            </div>
        </div>
    );
};

export default ItemDetail;