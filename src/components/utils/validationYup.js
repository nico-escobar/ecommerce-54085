import { number, object, string } from "yup";

let userSchema = object({
    name: string().required("Debe ingresar su nombre"),
    phone: number().required().positive().integer(),
    email: string("Debe ingresar un mail para continuar").email("Debe ingresar un mail para continuar").required("Debe ingresar un mail para continuar")
})

const validateForm = async(dataForm) => {
    try {
        await userSchema.validate(dataForm)
        return{status: "success"}
    } catch (error) {
        return {status: "error", error: error.message}
    }
}

export default validateForm