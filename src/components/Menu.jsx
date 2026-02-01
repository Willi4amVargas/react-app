export function Menu({ appPage, setAppPage }) {

    return <>
        <nav>
            <ul>
                <li><button onClick={() => setAppPage("home")} style={{ backgroundColor: "transparent" }}>React App</button></li>
                <li><button onClick={() => setAppPage("list-product")}>Ver Productos</button></li>
                <li><button onClick={() => setAppPage("create-product")}>Crear Producto</button></li>
                <li><button onClick={() => setAppPage("edit-product")}>Editar Producto</button></li>
                <li><button onClick={() => setAppPage("delete-product")}>Eliminar Productos</button></li>
                <span>Pagina Actual: {appPage}</span>
            </ul>
        </nav>
    </>
}