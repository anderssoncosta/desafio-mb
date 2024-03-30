/* eslint-disable no-unused-vars */
import "./style.css"
import Box from "../../../components/box/box"
import React, { useContext } from "react"
import { FormContext } from "../../../context/form-context"
import ButtonPrimary from "../../../components/button-primary/button-primary"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const EmailForm = () => {

  const { form, setForm } = useContext(FormContext)
  const navigate = useNavigate()

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setForm({ ...form, [name]: value });
  }

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email)
  }

  const handleNext = () => {
    const isValidEmail = validateEmail(form.email)
    if (!isValidEmail) {
      toast.warning("Digite um e-mail válido !")
      return
    }
    if (form.typePerson === "") {
      toast.warning("Selecione uma opção para seguir !")
      return
    }
    navigate("/person-form")
  }

  return (
    <Box>
      <div className="box-content">
        <div className="header-form">
          <span>{`Etapa 1 de 4`}</span>
          <h1>Seja bem vindo(a)</h1>
        </div>

        <div className="form-content">
          <span>Endereço de e-mail</span>
          <input
            className="input-form"
            type="email"
            name="email"
            value={form.email}
            onChange={handleInputChange}
          />
          <div className="combo-box">
            <div>
              <span>Pessoa Física</span>
              <input
                type="radio"
                name="typePerson"
                value="PF"
                checked={form.typePerson === 'PF'}
                onChange={handleInputChange}
              />

            </div>
            <div>
              <span>Pessoa Jurídica</span>
              <input
                type="radio"
                name="typePerson"
                value="PJ"
                checked={form.typePerson === 'PJ'}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div>
            <ButtonPrimary name="Continuar" onClick={handleNext} />
          </div>
        </div>
      </div>

    </Box>
  )
}

export default EmailForm