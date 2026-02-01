import { useEffect, useState } from "react";
import { getProduct } from "../../lib/handlers";

function ProductDetail({ product }) {
  return (
    <>
      <span>
        <h3>{product.id}</h3>
        <h2>{product.name}</h2>
        <h4>{product.code}</h4>
        <p>{product.description}</p>
        <p>
          {product.price}
          {product.coin === "01"
            ? " BS "
            : product.coin === "02"
              ? " DLS "
              : "Moneda no Valida"}
        </p>
      </span>
    </>
  );
}

export function ProductList() {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    const allProducts = await getProduct()
    setProducts(allProducts)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <>
      <h1>Listado de Productos</h1>
      <section>
        {products.map((pro) => {
          return <ProductDetail key={pro.id} product={pro} />;
        })}
      </section>
    </>
  );
}