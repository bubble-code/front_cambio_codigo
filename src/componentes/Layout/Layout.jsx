import { Outlet } from "react-router-dom";
import MiNavbar from "../NavBar/Navbar";
const Layout = () => {
  return (
    <div className="main-app flex flex-col min-h-screen">
      <div className="header-app">
        <MiNavbar />
      </div>
      {/* className="flex flex-grow items-center justify-center px-10 mx-auto" */}
      <div >
        <Outlet />
      </div>
      <div className="footer-app"></div>
    </div>
  );
};

export default Layout;