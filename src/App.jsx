import "./App.css";
import { useState } from "react";
import { Menu } from "./components/Menu";
import { ProductList } from "./components/products/ProductList";
import { ProductForm } from "./components/products/ProductForm";
import { ProductLookup } from "./components/products/ProductLookup";

function App() {
  const [appPage, setAppPage] = useState("home");

  function RenderingComponent({ state }) {
    switch (state) {
      case "home":
        return <h1>React App</h1>;
      case "list-product":
        return <ProductList />;
      case "create-product":
        return <ProductForm />;
      case "edit-product":
        return <ProductLookup />;
      case "delete-product":
        return <ProductLookup mode="delete"/>;
      default:
        return <h1>Página No Encontrada</h1>;
    }
  }

  return (
    <>
      <Menu appPage={appPage} setAppPage={setAppPage} />
      <RenderingComponent state={appPage} />
    </>
  );
}

export default App;
