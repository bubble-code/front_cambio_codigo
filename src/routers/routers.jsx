import { createBrowserRouter } from "react-router-dom"
import Layout from "../componentes/Layout/Layout"
import Clonador from "../componentes/Clonador/Clonador"
import Tutoriales from "../componentes/Tutoriales/notasOFs"
import IaLayout from "../componentes/IA/IaLayout"
import HelpCarousel from "../componentes/HelpCarousel/HelpCarousel"
import { LayoutOF } from "../componentes/OrdenFabricacion/Layout"
import ExcelViewer from "../componentes/ExcelViewer/ExcelViewer"
import Home from "../componentes/Home/Home"
import LayoutGraficasOf from "../componentes/GraficasOf/LayoutGraficasOf"


export const routes = createBrowserRouter([
  {
    element: <Layout />,
    path: '/',
    children: [
      {
        index: true,
        element: <Home />
      },
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
          },
          {
            path: 'graficasOf',
            element: <LayoutGraficasOf />
          }
        ]
      }
    ]
  }
])