/* eslint-disable react/prop-types */
import { createContext, useState } from "react";


export const FormContext = createContext()

const FormProvider = ({ children }) => {
  const [form, setForm] = useState({
    typePerson: "",
    email: "",
    name: "",
    cpf: "",
    cnpj: "",
    birth: "",
    openDate: "",
    phone: "",
    password: "",
  })

  return (
    <FormContext.Provider value={{
      form, setForm
    }}>
      {children}
    </FormContext.Provider>
  )
}

export default FormProvider