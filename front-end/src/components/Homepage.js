import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Homepage = () => {
  return (
    <>
      <section style={{
        padding: '0px 0px 0px 370px'}}>
        <Sidebar/>
        <Outlet/>
      </section>
    </>
  );
};

export default Homepage;
