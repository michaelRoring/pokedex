import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <>
      {/* <p>Hello, this should be navbar</p> */}
      <Navbar />
      <Outlet />
    </>
  );
}

export default Layout;
