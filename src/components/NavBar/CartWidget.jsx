import React from 'react'
import { GrCart } from "react-icons/gr";

const CartWidget = () => {
    return (
        <div className='icon-carrito'>
            <GrCart size={50}/>
            <p className='numero'>0</p>
        </div>
        
    )
}

export default CartWidget
