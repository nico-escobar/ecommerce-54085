import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";


const Item = ({ product }) => {
    console.log(product);
    return (
        <div key={product.id} className="card">
            <div className="image-box-card">
                <img className="image-card" src={product.image} alt={product.name} />
            </div>
            <div className="info-card">
                <h2 className="title-card">{product.name}</h2>
                <p className="description-card">{product.description}</p>
                <Link to={"/detail/"+product.id} className="details-link">
                    Ver Detalles
                </Link>
            </div>
        </div>
    );
};

export default Item;