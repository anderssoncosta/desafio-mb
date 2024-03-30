import "./style.css"
import { useContext } from "react";
import Box from "../../../components/box/box";
import ButtonPrimary from "../../../components/button-primary/button-primary";
import { FormContext } from "../../../context/form-context";
import ButtonSecondary from "../../../components/button-secondary/button-secondary";
import { useNavigate } from "react-router-dom"
import InputMask from "react-input-mask"
import { toast } from "react-toastify"



const PersonForm = () => {

  const { form, setForm } = useContext(FormContext)
  const navigate = useNavigate()


  const handleInputChange = (event) => {
    const { name, value } = event.target
    setForm({
      ...form, [name]: value,
    });
  }

  const handleNext = () => {
    if (form.name === "") {
      toast.warning("Preencha o campo nome.")
      return
    }

    if (form.typePerson === "PF" && form.cpf === "") {
      toast.warning("Preencha o campo de CPF.");
      return;
    }

    if (form.typePerson === "PJ" && form.cnpj === "") {
      toast.warning("Preencha o campo de CNPJ.");
      return;
    }
    if (form.typePerson === "PF" && form.birth === "") {
      toast.warning("Preencha o campo de data de nascimento.");
      return;
    }

    if (form.typePerson === "PJ" && form.openDate === "") {
      toast.warning("Preencha o campo de data de abertura.");
      return;
    }

    if (form.phone === "") {
      toast.warning("Preencha o campo de telefone.");
      return;
    }

    navigate("/password-form")

  }

  const handleBackForm = (event) => {
    event.preventDefault()
    navigate("/")
  }

  return (
    <Box>
      <div className="header-form">
        <span>{`Etapa 2 de 4`}</span>
        <h1>{form.typePerson === "PF" ? "Pessoa Física" : "Pessoa Jurídica"}</h1>
      </div>

      {form.typePerson === "PF" ? (
        <div className="box-content">
          <div className="form-content">

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
              <InputMask
                className="input-form"
                mask="999.999.999-99"
                name="cpf"
                value={form.cpf}
                onChange={handleInputChange}
              />
            </div>

            <div className="content-input">
              <span>Data de Nascimento</span>
              <InputMask
                className="input-form"
                mask="99/99/9999"
                name="birth"
                value={form.birth}
                onChange={handleInputChange}
              />
            </div>

            <div className="content-input">
              <span>Telefone</span>
              <InputMask
                className="input-form"
                mask="(99) 99999-9999"
                name="phone"
                value={form.phone}
                onChange={handleInputChange}
              />
            </div>

          </div>
          <div className="button-content">
            <ButtonSecondary name="Voltar" onClick={handleBackForm} />
            <ButtonPrimary name="Continuar" onClick={handleNext} />
          </div>
        </div>
      ) : (
        <div className="box-content">
          <div className="form-content">
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
              <InputMask
                className="input-form"
                mask="99.999.999/9999-99"
                name="cnpj"
                value={form.cnpj}
                onChange={handleInputChange}
              />
            </div>

            <div className="content-input">
              <span>Data de Abertura</span>
              <InputMask
                className="input-form"
                mask="99/99/9999"
                name="openDate"
                value={form.openDate}
                onChange={handleInputChange}
              />
            </div>

            <div className="content-input">
              <span>Telefone</span>
              <InputMask
                className="input-form"
                mask="(99) 99999-9999"
                name="phone"
                value={form.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="button-content">
            <ButtonSecondary name="Voltar" onClick={handleBackForm} />
            <ButtonPrimary name="Continuar" onClick={handleNext} />
          </div>
        </div>
      )}
    </Box >
  )
}

export default PersonForm;