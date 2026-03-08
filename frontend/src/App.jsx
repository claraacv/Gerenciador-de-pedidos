import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import Teste from "./components/teste";
import ProductRegister from "./routes/registers/product";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <MainLayout>
      <ProductRegister />
    </MainLayout>
  );
}

export default App;
