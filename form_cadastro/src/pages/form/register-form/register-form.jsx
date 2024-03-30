import { useContext } from "react"
import Box from "../../../components/box/box"
import ButtonPrimary from "../../../components/button-primary/button-primary"
import ButtonSecondary from "../../../components/button-secondary/button-secondary"
import { FormContext } from "../../../context/form-context"
import { useNavigate } from "react-router-dom"
import { postData } from "../../../services/api"
import { toast } from "react-toastify"



const RegisterForm = () => {
  const { form, setForm } = useContext(FormContext)
  const navigate = useNavigate()


  const handleInputChange = (event) => {
    const { name, value } = event.target
    setForm({
      ...form, [name]: value,
    });
  }

  const handleBackForm = (event) => {
    event.preventDefault()
    navigate("/password-form")
  }

  const RegisterForm = async () => {
    try {
      await postData(form)
      toast.success("Cadastro efetuado com sucesso !")
      setForm({
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
      navigate("/")

    } catch (error) {
      console.error(error)
      toast.error("Erro ao cadastrar.")
    }
  }

  return (
    <Box>
      <div className="header-form">
        <span>{`Etapa 4 de 4`}</span>
        <h1>{form.typePerson === "PF" ? "Pessoa Física" : "Pessoa Jurídica"}</h1>
      </div>

      {form.typePerson === "PF" ? (
        <div className="box-content">
          <div className="form-content">

            <div className="content-input">
              <span>E-mail</span>
              <input
                className="input-form"
                type="text"
                name="email"
                value={form.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="content-input">
              <span>Nome</span>
              <input
                className="input-form"
                type="text"
                name="name"
                value={form.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="content-input">
              <span>CPF</span>
              <input
                className="input-form"
                type="text"
                name="cpf"
                value={form.cpf}
                onChange={handleInputChange}
              />
            </div>

            <div className="content-input">
              <span>Data de Nascimento</span>
              <input
                className="input-form"
                type="text"
                name="birth"
                value={form.birth}
                onChange={handleInputChange}
              />
            </div>

            <div className="content-input">
              <span>Telefone</span>
              <input
                className="input-form"
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleInputChange}
              />
            </div>

            <div className="content-input">
              <span>Senha</span>
              <input
                className="input-form"
                type="text"
                name="password"
                value={form.password}
                onChange={handleInputChange}
              />
            </div>

          </div>
          <div className="button-content">
            <ButtonSecondary name="Voltar" onClick={handleBackForm} />
            <ButtonPrimary name="Cadastrar" onClick={RegisterForm} />
          </div>
        </div>
      ) : (
        <div className="box-content">
          <div className="form-content">

            <div className="content-input">
              <span>E-mail</span>
              <input
                className="input-form"
                type="text"
                name="email"
                value={form.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="content-input">
              <span>Razão Social</span>
              <input
                className="input-form"
                type="text"
                name="name"
                value={form.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="content-input">
              <span>CNPJ</span>
              <input
                className="input-form"
                type="text"
                name="cnpj"
                value={form.cnpj}
                onChange={handleInputChange}
              />
            </div>

            <div className="content-input">
              <span>Data de Abertura</span>
              <input
                className="input-form"
                type="text"
                name="openDate"
                value={form.openDate}
                onChange={handleInputChange}
              />
            </div>

            <div className="content-input">
              <span>Telefone</span>
              <input
                className="input-form"
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleInputChange}
              />
            </div>

            <div className="content-input">
              <span>Senha</span>
              <input
                className="input-form"
                type="text"
                name="password"
                value={form.password}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="button-content">
            <ButtonSecondary name="Voltar" onClick={handleBackForm} />
            <ButtonPrimary name="Cadastrar" onClick={RegisterForm} />
          </div>
        </div>
      )}
    </Box >
  )
}
export default RegisterForm