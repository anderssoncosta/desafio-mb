import 'react-toastify/dist/ReactToastify.css';

import React from 'react'
import ReactDOM from 'react-dom/client'
import FormProvider from './context/form-context.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from "react-toastify"
import RoutesApp from './routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FormProvider>
        <ToastContainer autoClose={3000} />
        <RoutesApp />
      </FormProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
