import { useState, useEffect } from "react";
import { getProduct, createProduct, updateProduct } from "../../lib/handlers";

export function ProductForm({ id = -1 } = {}) {
  // una manera de resolver el texto del boton y los titulos
  const modeText = id === -1 ? "Crear" : "Modificar";

  const [formData, setFormData] = useState({
    id,
    code: "",
    description: "",
    price: 0,
    coin: "",
  });

  function onSubmit(e) {
    e.preventDefault();
    if (id !== -1) {
      return updateProduct(formData);
    }
    createProduct(formData);
  }

  async function loadProduct({ p_id }) {
    const product = await getProduct({ id: p_id });
    if (product) {
      setFormData(product);
    }
  }

  useEffect(() => {
    if (id !== -1) {
      loadProduct({ p_id: id });
    }
  }, [id]);

  return (
    <>
      <h1>{modeText} un Producto</h1>

      <form onSubmit={onSubmit}>
        <label htmlFor="code">Codigo</label>
        <input
          type="text"
          id="code"
          name="code"
          value={formData.code}
          onChange={(e) => setFormData({ ...formData, code: e.target.value })}
        />

        <label htmlFor="description">Descripción</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />

        <label htmlFor="price">Precio</label>
        <input
          type="number"
          step="any"
          id="price"
          name="price"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: +e.target.value })}
        />

        <label htmlFor="coin">Moneda</label>
        <select
          name="coin"
          id="coin"
          value={formData.coin}
          onChange={(e) => setFormData({ ...formData, coin: e.target.value })}
        >
          <option value="" disabled>
            Seleccione una moneda...
          </option>
          <option value="01">BS</option>
          <option value="02">USD</option>
        </select>

        <button type="submit">{modeText} Producto</button>
      </form>
    </>
  );
}
