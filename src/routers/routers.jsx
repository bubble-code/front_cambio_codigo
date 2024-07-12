import { createBrowserRouter } from "react-router-dom"
import Layout from "../componentes/Layout/Layout"
// import { Automate } from "../pages/Automate"
// import FormTabExcel from "../components/FormTabExcel"
import Clonador from "../componentes/Clonador/Clonador"
import Tutoriales from "../componentes/Tutoriales/notasOFs"
import IaLayout  from "../componentes/IA/IaLayout"


export const routes = createBrowserRouter([
  {
    element: <Layout />,
    path: '/',
    children: [
      {
        path: 'clonador',
        // element: <Automate />,
        element: <Clonador/>,
        // children: [{
        //   path: 'formtabexcel',
        //   element: <FormTabExcel />
        // }
        // ]
      },
      {
        path: 'tutoriales',
        element: <Tutoriales/>
      },
      {
        path:'ia',
        element:<IaLayout/>
      }
    ]
  }
])