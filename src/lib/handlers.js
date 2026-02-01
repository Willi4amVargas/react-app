import env from "./env";

export async function getProduct({ id = -1 } = {}) {
  let url = env.API_URL + "/products";

  if (id !== -1) {
    url = env.API_URL + "/products" + "/" + id;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw Error("Error en la peticion");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return;
  }
}

export async function createProduct(product) {
  try {
    const response = await fetch(env.API_URL + "/products", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
      method: "POST",
    });

    const data = await response.json();

    if (!response.ok) {
      console.error(data);
      throw Error("Error en la peticion");
    }
    alert("Producto agregado correctamente");
    return;
  } catch (error) {
    console.error(error);
    return;
  }
}

export async function updateProduct(product) {
  try {
    const response = await fetch(env.API_URL + "/products/" + product.id, {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
      method: "PUT",
    });
    const data = await response.json();

    if (!response.ok) {
      console.error(data);
      throw Error("Error en la peticion");
    }
    alert("Producto modificado correctamente");
    return;
  } catch (error) {
    console.error(error);
    return;
  }
}

export async function deleteProduct({ id }) {
  try {
    const response = await fetch(env.API_URL + "/products/" + id, {
      method: "DELETE",
    });
    const data = await response.json();

    if (!response.ok) {
      console.error(data);
      throw Error("Error en la peticion");
    }
    alert("Producto eliminado correctamente");
    return;
  } catch (error) {
    console.error(error);
    return;
  }
}
