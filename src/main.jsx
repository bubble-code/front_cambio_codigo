
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routers/routers.jsx'
import './index.css'
import "@blueprintjs/core/lib/css/blueprint.css";
// include blueprint-icons.css for icon font support
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes}/>
)
