import { useEffect, useState } from "react"
import Box from "../../../components/box/box"
import { getData } from "../../../services/api"

const RegisteredForm = () => {

  const [form, setForm] = useState([])

  useEffect(() => {
    const fetchGet = async () => {
      try {
        const response = await getData()
        setForm(response)
      } catch (error) {
        console.error("Erro ao consultar dados")
      }
    }
    fetchGet()
  }, [])

  return (
    <Box>
      <div>
        <h3>Formulários Cadastrados:</h3>
      </div>
      <>
        {form.length === 0 ? (
          <div>
            <h3>Não houve cadastro</h3>
          </div>

        ) : (
          form.map((item, index) => (
            <div key={index}>
              <p>Nome: {item.name}</p>
              <p>Pessoa: {item.typePerson}</p>
              <p>Email: {item.email}</p>
            </div>
          ))
        )}
      </>
    </Box>
  )
}
export default RegisteredForm