class Producto {
    constructor(id, nombre, precio_mlc, precio_cup,  marca, categoria, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.precio_mlc = precio_mlc;
        this.precio_cup = precio_cup;
        this.marca = marca;
        this.categoria = categoria;
        this.cantidad = cantidad;
    }
}

// Lista global de productos (con cantidades añadidas)
let productosTotales = [

    // Baterías
    new Producto(1, "Batería 12V 200AH", "330.00$", "131 769.10$", "Marca", "baterias", 1),
    new Producto(2, "Batería 12V 155AH", "285.00$", "113 138.35$", "Marca", "baterias", 1),
    new Producto(3, "Batería 12V 115AH", "240.00$", "93 063.46$", "Marca", "baterias", 1),
    new Producto(4, "Batería 12V 110AH", "210.00$", "83 351.62$", "Marca", "baterias", 1),
    new Producto(5, "Batería 12V 75AH", "145.00$", "57 384.40$", "Marca", "baterias", 1),


    // ------------------------------------------------------------------------------------------------ //

    // ------------------------------------------------------------------------------------------------ //


    // Filtros
    new Producto(102, "Filtro de Gasolina", "6.41$", "1 761.72$", "HYUNDAY", "filtros", 1),
    new Producto(102, "Filtro decantador de Agua", "614.04$", "3 862.23$", "HYUNDAY", "filtros", 1),
    new Producto(103, "Filtro de Aire", "$", "2 108.48$", "HYUNDAY", "filtros", 1),
    new Producto(104, "Filtro Diesel", "3.60$", "1 187.02$", "MITSUBISHI L200/l300 4D 55/56(9005)", "filtros", 1),
    new Producto(105, "Filtro Diesel", "3.50$", "1 155.01$", "NISSAN SD23/TD27(02n10)", "filtros", 1),
    new Producto(106, "Filtro Diesel", "3.49$", "1 152.42$", "TOYOTA 2L/3L", "filtros", 1),
    new Producto(107, "Filtro Diesel", "3.51$", "1 159.91$", "MITSUBISHI CANTER/ROSA 4D30/33(209005)", "filtros", 1),


    // ------------------------------------------------------------------------------------------------ //

    // ------------------------------------------------------------------------------------------------ //


    // Neumáticos
    new Producto(201, "Neumático Delantero 500*8", "$", "14 346.41", "Marca", "neumaticos", 1),
    new Producto(202, "Neumático Trasero 6 50*10", "$", "16 692.81", "Marca", "neumaticos", 1),

    // ------------------------------------------------------------------------------------------------ //

    // ------------------------------------------------------------------------------------------------ //


    // Amortiguación
    new Producto(301, "Amortiguador Derecho", "53.06$", "14 738.44$", "Marca", "amortiguacion", 1),
    new Producto(302, "Amortiguador Izquierdo", "57.50$", "15 811.61$", "Marca", "amortiguacion", 1),


    // ------------------------------------------------------------------------------------------------ //

    // ------------------------------------------------------------------------------------------------ //


    // Aceites
    new Producto(401, "Retente Aceite Ruedas Delanteras", "0.88$", "243.13", "Aceite", "aceites", 1),
    new Producto(402, "Retente de Aceite", "1.30$", "358.72$", "Aceite", "aceites", 1),

    new Producto(405, "Aceite 15W40 Diesel API CH-4", "7.12$", "2 546.09$", "Aceite", "aceites", "5L"),
    new Producto(406, "Aceite 15W40 Gasolina API SL", "7.12$", "2 545.59$", "Aceite", "aceites", "4L"),
    new Producto(407, "Aceite 15W40 Diesel API CH-4", "7.12$", "2 546.34$", "Aceite", "aceites", "200L"),
    new Producto(408, "Aceite 15W40 Gasolina API SL", "7.12$", "2 545.44$", "Aceite", "aceites", "200L"),

    new Producto(410, "Aceite Transmision Automatica CVT", "11.57$", "4 136.58$", "Aceite", "aceites", "1L"),


    // ------------------------------------------------------------------------------------------------ //

    // ------------------------------------------------------------------------------------------------ //


    // Frenos
    new Producto(501, "Disco de Freno", "$", "9 402.03$", "MITSUBISHI", "frenos", 1),

    new Producto(502, "Taco de Freno", "$", "5 077.34$", "TOYOTA HIACE", "frenos", 1),

    new Producto(503, "Banda de Freno Emergencia", "67.58$", "8 110.00$", "Marca", "frenos", 1),

    new Producto(504, "Pinza de Freno Tracero Derecho .27", "204.10$", "56 127.84", "Marca", "frenos", 1),

    new Producto(505, "Juego de Bandas de Freno", "22.97$", "7 692.57$", "TRUCK", "frenos", 1),



];

// Obtener elementos del DOM
let contenedorResultados = document.getElementById("contenedor_resultados");

// Mostrar productos
function mostrarProductos(productos) {
    contenedorResultados.innerHTML = ""; // Limpiar resultados anteriores
    productos.forEach(producto => {
        let cajaContenedora = document.createElement("div");
        cajaContenedora.innerHTML = `<p><span class="producto_span">ID:</span> ${producto.id}</p>
                                     <p><span class="producto_span">Nmbre:</span> ${producto.nombre}</p>
                                     <p><span class="producto_span">Precio MLC:</span> ${producto.precio_mlc}</p>
                                     <p><span class="producto_span">Precio CUP:</span> ${producto.precio_cup}</p>
                                     <p><span class="producto_span">Marca:</span> ${producto.marca}</p>
                                     <p><span class="producto_span">Cantidad Disponible:</span> ${producto.cantidad}</p>`;
        contenedorResultados.appendChild(cajaContenedora);
    });
}

// Filtrar productos por categoría
function filtrarPorCategoria(categoria) {
    let productosFiltrados = productosTotales.filter(producto => producto.categoria === categoria);
    mostrarProductos(productosFiltrados);
}

// Búsqueda de productos
function buscarProducto(event) {
    event.preventDefault(); // Prevenir recarga de la página

    let valorBusqueda = document.getElementById("input_busqueda").value.toLowerCase().trim();
    if (valorBusqueda.length < 3) {
        alert("Debe ingresar al menos 3 caracteres para la búsqueda.");
        return;
    }

    let productosFiltrados = productosTotales.filter(producto =>
        producto.nombre.toLowerCase().includes(valorBusqueda) ||
        producto.marca.toLowerCase().includes(valorBusqueda)
    );

    if (productosFiltrados.length > 0) {
        mostrarProductos(productosFiltrados);
    } else {
        contenedorResultados.innerHTML = "<p>No se encontraron productos.</p>";
    }
}

// Prevenir la recarga del formulario
document.querySelector("form").addEventListener("submit", buscarProducto);

// Botones de categoría
document.getElementById("boton_baterias").addEventListener("click", () => {
    filtrarPorCategoria("baterias");
});

document.getElementById("boton_filtros").addEventListener("click", () => {
    filtrarPorCategoria("filtros");
});

document.getElementById('boton_neumaticos').addEventListener("click", () => {
    filtrarPorCategoria("neumaticos");
});
document.getElementById('boton_amortiguacion').addEventListener("click", () => {
    filtrarPorCategoria("amortiguacion");
});
document.getElementById('boton_aceites').addEventListener("click", () => {
    filtrarPorCategoria("aceites");
});
document.getElementById('boton_frenos').addEventListener("click", () => {
    filtrarPorCategoria("frenos");
});
