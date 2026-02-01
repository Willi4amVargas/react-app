import { useState } from "react";
import { deleteProduct, getProduct } from "../../lib/handlers";
import { ProductForm } from "./ProductForm";

export function ProductLookup({ mode = "edit" } = {}) {
  // una manera de resolver el texto del boton y los titulos
  const modeText = mode === "edit" ? "Buscar" : "Eliminar";

  const [idValue, setIdValue] = useState("");
  const [isFound, setIsFound] = useState(false);

  async function handleAction() {
    if (!idValue || idValue === "") return alert("Por favor, ingresa un ID");

    const product = await getProduct({ id: idValue });

    if (!product) {
      return alert("El producto no existe");
    }

    if (mode === "edit") return setIsFound(true);
    if (mode === "delete") {
      setIdValue("");
      return deleteProduct({ id: idValue });
    }
  }

  if (isFound) {
    return (
      <>
        <ProductForm id={idValue} />
        <button
          style={{ backgroundColor: "red" }}
          onClick={() => setIsFound(false)}
        >
          Regresar
        </button>
      </>
    );
  }

  return (
    <>
      <h1>Escribe el código del producto que quieres {modeText}</h1>
      <input
        type="number"
        placeholder="ID del producto..."
        value={idValue}
        onChange={(e) => setIdValue(e.target.value)}
      />
      <button onClick={handleAction}>{modeText} producto</button>
    </>
  );
}
