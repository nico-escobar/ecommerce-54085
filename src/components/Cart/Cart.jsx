import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { MdDeleteForever } from "react-icons/md";
import './Cart.css'

const Cart = () => {
    const {cart, clearCart, deleteProductById, totalPrice} = useContext(CartContext)
    
    if(cart.length === 0){
        return <div className="cart-empty">
            <h2>No hay productos en el carrito </h2>
            <Link className="button-cart-empty" to="/ ">Agregar Productos</Link>
        </div>
    }
    return (
        <div className="cart-container">
            <h2>Productos en el Carrito</h2>
            <div>
                {cart.map((product)=> (
                    <div key={product.id} className="cart-item">
                        <div className="cart-item-info">
                            <p>{product.name}</p>
                            <p>Cantidad: {product.quantity}</p>
                            <p>Precio c/u: ${product.price.toFixed(2)}</p>
                            <p>Total: ${product.quantity * product.price}</p>
                        </div>
                        <img src={product.image} className="cart-item-image" alt={product.name} />
                        <button className="cart-item-remove" onClick={() => deleteProductById(product.id)}><MdDeleteForever /></button>
                    </div>
                ))}
                <div className="cart-summary">
                    <h3>Total: ${totalPrice()}</h3>
                    <Link to="/checkout" className="cart-checkout" >Continuar Compra</Link>
                    <button className="cart-clear" onClick={clearCart}>Vaciar Carrito</button>
                </div>
            </div>
        </div>
    )
}

export default Cart

