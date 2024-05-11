import React from 'react'
import "./checkout.css"

const FormularioCheckout = ({dataForm, handleSubmit, handleChangeInput}) => {
return (
    <div className="form-container">
        <form onSubmit={handleSubmit} className="form">
            <label htmlFor="name" className="label">Nombre</label>
            <input type="text" id="name" name="name" value={dataForm.name} onChange={handleChangeInput} className="input"/>

            <label htmlFor="phone" className="label">Teléfono</label>
            <input type="text" id="phone" name="phone" value={dataForm.phone} onChange={handleChangeInput} className="input"/>

            <label htmlFor="email" className="label">Email</label>
            <input type="text" id="email" name="email" value={dataForm.email} onChange={handleChangeInput} className="input"/>

            <button type="submit" className="button">Enviar Formulario</button>
        </form>
</div>
    )
}

export default FormularioCheckout
