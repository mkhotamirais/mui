import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="p-3 lg:px-16 min-h-[calc(100vh-4rem)]">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
