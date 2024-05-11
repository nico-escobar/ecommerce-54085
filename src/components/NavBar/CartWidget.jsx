import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import React from 'react'
import { GrCart } from "react-icons/gr";
import { Link } from 'react-router-dom';

const CartWidget = () => {

    const {totalQuantity}=useContext(CartContext)

    return (
        <Link to="/cart" className='icon-carrito'>
            <GrCart size={40} color='black'/>
            <p className='numero'> {totalQuantity () === 0 ? "" : totalQuantity()} </p>
        </Link>
        
    )
}

export default CartWidget
