import { createBrowserRouter } from "react-router-dom"
import Layout from "../componentes/Layout/Layout"
import Clonador from "../componentes/Clonador/Clonador"
import Tutoriales from "../componentes/Tutoriales/notasOFs"
import IaLayout from "../componentes/IA/IaLayout"
import HelpCarousel from "../componentes/HelpCarousel/HelpCarousel"
import { LayoutOF } from "../componentes/OrdenFabricacion/Layout"
import ExcelViewer from "../componentes/ExcelViewer/ExcelViewer"


export const routes = createBrowserRouter([
  {
    element: <Layout />,
    path: '/',
    children: [
      {
        path: 'clonador',
        // element: <Automate />,
        element: <Clonador />,
        // children: [{
        //   path: 'formtabexcel',
        //   element: <FormTabExcel />
        // }
        // ]
      },
      {
        path: 'tutoriales',
        element: <Tutoriales />
      },
      {
        path: 'ia',
        element: <IaLayout />
      },
      {
        path: 'cfamilia',
        element: <HelpCarousel />
      },
      {
        path: 'ordenF',
        element: <LayoutOF />,
        children: [
          {
            path: 'crearOF',
            element: <ExcelViewer />
          }
        ]
      }
    ]
  }
])