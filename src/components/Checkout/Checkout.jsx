import React from 'react'
import { useState, useContext } from 'react'
import FormularioCheckout from './FormularioCheckout'
import { CartContext } from '../context/CartContext'
import { addDoc, collection } from 'firebase/firestore'
import db from '../../db/db'
import { Link } from 'react-router-dom'
import "./checkout.css"
import validateForm from '../utils/validationYup.js'
import { toast } from 'react-toastify'

const Checkout = () => {
    const [dataForm, setDataForm]= useState({
        name:"",
        phone:"",
        email:"",
    })

const [idOrder, setIdOrder] = useState(null)    
const {cart, totalPrice, clearCart} =useContext(CartContext)

    const handleChangeInput= (event) => {
        setDataForm({...dataForm, [event.target.name] : event.target.value})
}


const handleSubmit = async(event) =>{
    event.preventDefault();
    const order ={
        user: {...dataForm},
        products: [...cart],
        total: totalPrice()
    }
    
    const response = await validateForm(dataForm)
    if(response.status === "success"){
        uploadOrder(order)
    }else{
        toast(response.error)
    }
};

const uploadOrder = async(order) => {
    const ordersRef = collection(db, "orders")
    const response = await addDoc(ordersRef,order)

    setIdOrder(response.id)
    clearCart()
}

    return (
        <div className="container">
            {
                idOrder ? (
                <div className="messege">
                    <h2>Gracias por su compra </h2>
                    <p>El comprobante de tu compra es: {idOrder} </p>
                    <Link to="/" className="button-volver">Volver al inicio</Link>                    
                </div> ): ( <FormularioCheckout 
                dataForm={dataForm}
                handleChangeInput={handleChangeInput}
                handleSubmit={handleSubmit} 
                />
            )}
            
        </div>
    )
}

export default Checkout
