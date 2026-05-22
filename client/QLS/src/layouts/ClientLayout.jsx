import { Outlet } from "react-router-dom";
import Header from "../components/layout/client/Header/Header";

function ClientLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow">
        <Outlet /> 
      </main>
    </div>
  );
}

export default ClientLayout;
