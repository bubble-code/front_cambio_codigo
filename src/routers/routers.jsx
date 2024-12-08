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
import Pedidos from "../componentes/Pedidos/Pedidos"
import PedidosCompras from "../componentes/Pedidos/PedidosCompras"
import PedidosVentas from "../componentes/Pedidos/PedidosVentas"
import GestionOfs from "../componentes/GestionOFs/GestionOfs"
import ListaOfs from "../componentes/GestionOFs/ListaOfs"
import ArbolOfs from "../componentes/GestionOFs/ArbolOfs"
import OfsPendientesCorreccion from "../componentes/GestionOFs/OfsPendientesCorreccion"
import Graficas from "../componentes/GestionOFs/Graficas"


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
        path: 'fabrica',
        element: <LayoutOF />,
        children: [
          {
            path: 'crearOF',
            element: <ExcelViewer />
          },
          {
            path: 'graficasOf',
            element: <LayoutGraficasOf />
          },
          {
            path: 'pedidos', // Subruta de "Pedidos"
            element: <Pedidos />,
            children: [
              {
                path: 'pedidosCompras', // Subruta de "Pedido de Compras"
                element: <PedidosCompras />
              },
              {
                path: 'pedidosVentas', // Subruta de "Pedidos de Ventas"
                element: <PedidosVentas />
              }
            ]
          },
          {
            path: 'gestionOfs', // Subruta de "Gestion OFs"
            element: <GestionOfs />,
            children: [
              {
                path: 'listaOfs', // Subruta de "Lista de OFs"
                element: <ListaOfs />
              },
              {
                path: 'arbolOfs', // Subruta de "Arbol de OFs"
                element: <ArbolOfs />
              },
              {
                path: 'ofsPendientesCorreccion', // Subruta de "OFs pendientes de corrección"
                element: <OfsPendientesCorreccion />
              },
              {
                path: 'graficas', // Subruta de "Graficas"
                element: <Graficas />
              }
            ]
          }
        ]
      }
    ]
  }
])