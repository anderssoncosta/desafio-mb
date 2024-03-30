import { Routes, Route } from 'react-router-dom'
import EmailForm from './pages/form/email-form/email-form'
import PersonForm from './pages/form/person-form/person-form'
import PasswordForm from './pages/form/password-form/password-form'
import RegisterForm from './pages/form/register-form/register-form'
import RegisteredForm from './pages/form/registered-form/registered-form'


const RoutesApp = () => {
  return (
    <Routes >
      <Route path='/' element={<EmailForm />} />
      <Route path='/person-form' element={<PersonForm />} />
      <Route path='/password-form' element={<PasswordForm />} />
      <Route path='/register-form' element={<RegisterForm />} />
      <Route path='/registered-form' element={<RegisteredForm />} />
    </Routes>
  )
}
export default RoutesApp
