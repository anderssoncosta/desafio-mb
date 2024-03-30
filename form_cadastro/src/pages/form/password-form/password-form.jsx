import "./style.css"
import { useContext } from "react"
import Box from "../../../components/box/box"
import { useNavigate } from "react-router-dom"
import { FormContext } from "../../../context/form-context"
import ButtonPrimary from "../../../components/button-primary/button-primary"
import ButtonSecondary from "../../../components/button-secondary/button-secondary"
import { toast } from "react-toastify"


const PasswordForm = () => {

  const { form, setForm } = useContext(FormContext)
  const navigate = useNavigate()

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setForm({ ...form, [name]: value });
  }

  const handleNextStep = () => {
    if (form.password === "") {
      toast.warning("Digite uma senha.");
      return;
    }
    navigate("/register-form")
  }

  const handleBackForm = (event) => {
    event.preventDefault()

    navigate("/person-form")
  }

  return (
    <Box>
      <div className="box-content">
        <div className="header-form">
          <span>{`Etapa 3 de 4`}</span>
          <h1>Senha de acesso</h1>
        </div>

        <div className="form-content">
          <span>Sua senha</span>
          <input
            className="input-form"
            type="password"
            name="password"
            value={form.password}
            onChange={handleInputChange}
          />
          <div className="button-content">
            <ButtonSecondary name="Voltar" onClick={handleBackForm} />
            <ButtonPrimary name="Continuar" onClick={handleNextStep} />
          </div>
        </div>
      </div>
    </Box>
  )
}
export default PasswordForm