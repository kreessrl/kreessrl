class Producto {
    constructor(id, nombre, precio_mlc, precio_cup, marca, categoria, cantidad, imagen = null) {
        this.id = id;
        this.nombre = nombre;
        this.precio_mlc = precio_mlc;
        this.precio_cup = precio_cup;
        this.marca = marca;
        this.categoria = categoria;
        this.cantidad = cantidad;
        this.imagen = imagen;
    }
}

// Lista global de productos
let productosTotales = [

     //---------------------//
    // --- Ferreteria ---  //
   //---------------------//

    // Martillos --- martillos
    new Producto(1, "Martillos", "330.00$", "131 769.10$", "Marca", "martillos", 1),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Destornilladores --- destornilladores

    new Producto(102, "Destornilladores", "6.41$", "1 761.72$", "HYUNDAY", "destornilladores", 1),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Sierras --- sierras

    new Producto(201, "Sierras", "6.41$", "1 761.72$", "HYUNDAY", "sierras", 1),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Pulidoras --- pulidoras

    new Producto(301, "Pulidoras", "6.41$", "1 761.72$", "HYUNDAY", "pulidoras", 1),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //


     //---------------------//
    // --- AUTOMOTRIZ ---  //
   //---------------------//

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Baterías
    new Producto(1, "Batería 12V 200AH", "330.00$", "131 769.10$", "Marca", "baterias", 1),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Filtros
    new Producto(102, "Filtro de Gasolina", "6.41$", "1 761.72$", "HYUNDAY", "filtros", 1),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Neumáticos
    new Producto(201, "Neumático Delantero 500*8", "$", "14 346.41", "Marca", "neumaticos", 1, "../IMG/Automotriz/neumatico.jpg"),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Amortiguación
    new Producto(301, "Amortiguador Derecho", "53.06$", "14 738.44$", "Marca", "amortiguacion", 1),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Aceites
    new Producto(401, "Retente Aceite Ruedas Delanteras", "0.88$", "243.13", "Aceite", "aceites", 1),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Frenos
    new Producto(501, "Disco de Freno", "$", "9 402.03$", "MITSUBISHI", "frenos", 1),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Kit de Reparacion --- kit

    new Producto(601, "Kit de Reparacion", "20$", "9 402.03$", "Suiza", "kit", 1),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Juntas --- juntas

    new Producto(701, "Juntas", "25$", "9 402.03$", "China", "juntas", 1),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Bujias --- bujias

    new Producto(801, "Bujias", "35$", "9 402.03$", "Alemania", "bujias", 1),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Esfericas Superiores --- esfericas superiores

    new Producto(901, "Esfericas Superiores", "35$", "9 402.03$", "Rusia", "esfericas superiores", 1),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Correas --- correas

    new Producto(1001, "Correas", "35$", "9 402.03$", "Brasil", "correas", 1),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Discos --- discos

    new Producto(1101, "Discos", "35$", "9 402.03$", "Brasil", "discos", 1),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Buje --- buje

    new Producto(1201, "Buje", "35$", "9 402.03$", "Francia", "buje", 1),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Anillos --- anillos

    new Producto(1301, "Anillos", "35$", "9 402.03$", "Francia", "anillos", 1),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Banda --- banda

    new Producto(1401, "Banda", "35$", "9 402.03$", "Francia", "banda", 1),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Rodamiento --- rodamiento

    new Producto(1501, "Rodamiento", "35$", "9 402.03$", "Francia", "rodamiento", 1),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Farol --- farol

    new Producto(1301, "Farol", "35$", "9 402.03$", "Francia", "farol", 1),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Reten --- reten

    new Producto(1601, "Reten", "35$", "9 402.03$", "Francia", "reten", 1),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Pinza --- pinza

    new Producto(1701, "Pinza", "35$", "9 402.03$", "Francia", "pinza", 1),


];

// Botones Radio de las Categorias Principales

function limpiar() {
    contenedorResultados.innerHTML = ""; // Limpiar resultados anteriores
}

let radio_1 = document.getElementById("radio_1");
let radio_2 = document.getElementById("radio_2");

radio_1.addEventListener("click", limpiar);
radio_2.addEventListener("click", limpiar);



// Obtener elementos del DOM
let contenedorResultados = document.getElementById("contenedor_resultados");

function mostrarProductos(productos) {
    contenedorResultados.innerHTML = ""; // Limpiar resultados anteriores

    productos.forEach(producto => {
        let cajaContenedora = document.createElement("div");
        cajaContenedora.classList.add("producto-caja");

        // Mostrar solo el nombre, la marca y el precio en la vista inicial
        cajaContenedora.innerHTML = `<p><span class="producto_span">Nombre:</span> ${producto.nombre}</p>
                                     <p><span class="producto_span">Marca:</span> ${producto.marca}</p>
                                      <p><span class="producto_span">Precio CUP:</span> ${producto.precio_cup}</p>
                                     <p><span class="producto_span">Precio MLC:</span> ${producto.precio_mlc}</p>`;

        // Verificar si el producto tiene una imagen y establecerla como fondo
        if (producto.imagen) {
            cajaContenedora.style.backgroundImage = `url(${producto.imagen})`;
            cajaContenedora.style.backgroundSize = "cover";  // Para ajustar la imagen al contenedor
            cajaContenedora.style.backgroundPosition = "center"; // Centrar la imagen
        }

        // Si el producto está agotado, añadir un overlay gris transparente
        if (producto.cantidad === 0) {
            let overlay = document.createElement("div");
            overlay.classList.add("producto-agotado-overlay");
            overlay.innerHTML = `<p class="producto-agotado-texto">Agotado</p>`;
            cajaContenedora.appendChild(overlay);
        }

        // Agregar evento para expandir el producto cuando se hace clic
        cajaContenedora.addEventListener("click", () => abrirProductoEmergente(producto));

        contenedorResultados.appendChild(cajaContenedora);
    });
}


function abrirProductoEmergente(producto) {
    // Crear un contenedor de fondo para el "popup"
    let fondoPopup = document.createElement("div");
    fondoPopup.classList.add("fondo-popup");

    // Crear el contenedor del producto ampliado
    let productoAmpliado = document.createElement("div");
    productoAmpliado.classList.add("producto-popup");

    // Rellenar con toda la información del producto
    let contenidoProducto = `
        <p><span class="producto_span">ID:</span> ${producto.id}</p>
        <p><span class="producto_span">Nombre:</span> ${producto.nombre}</p>
        <p><span class="producto_span">Precio MLC:</span> ${producto.precio_mlc}</p>
        <p><span class="producto_span">Precio CUP:</span> ${producto.precio_cup}</p>
        <p><span class="producto_span">Marca:</span> ${producto.marca}</p>
        <p><span class="producto_span">Cantidad Disponible:</span> ${producto.cantidad}</p>`;

    // Verificar si hay una imagen para mostrar
    if (producto.imagen) {
        contenidoProducto = `<img src="${producto.imagen}" alt="${producto.nombre}" class="imagen-producto">` + contenidoProducto;
    }

    // Añadir contenido al contenedor del producto ampliado
    productoAmpliado.innerHTML = contenidoProducto;

    // Botón para cerrar el "popup"
    let botonCerrar = document.createElement("button");
    botonCerrar.textContent = "Cerrar";
    botonCerrar.classList.add("boton-cerrar");
    botonCerrar.addEventListener("click", () => {
        document.body.removeChild(fondoPopup); // Elimina el popup
    });

    productoAmpliado.appendChild(botonCerrar);
    fondoPopup.appendChild(productoAmpliado);
    document.body.appendChild(fondoPopup); // Añadir el fondo del popup a la página
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

// Ferreteria

document.getElementById("boton_martillos").addEventListener("click", () => {
    filtrarPorCategoria("martillos");
});
document.getElementById("boton_destornilladores").addEventListener("click", () => {
    filtrarPorCategoria("destornilladores");
});
document.getElementById("boton_sierras").addEventListener("click", () => {
    filtrarPorCategoria("sierras");
});
document.getElementById("botn_pulidoras").addEventListener("click", () => {
    filtrarPorCategoria("pulidoras");
});


// Automotriz

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

// --- --- Nuevos --- --- //

document.getElementById('boton_kit').addEventListener("click", () => {
    filtrarPorCategoria("kit");
});
document.getElementById('boton_juntas').addEventListener("click", () => {
    filtrarPorCategoria("juntas");
});
document.getElementById('boton_bujias').addEventListener("click", () => {
    filtrarPorCategoria("bujias");
});
document.getElementById('boton_esfericas_sup').addEventListener("click", () => {
    filtrarPorCategoria("esfericas superiores");
});
document.getElementById('boton_correas').addEventListener("click", () => {
    filtrarPorCategoria("correas");
});
document.getElementById('boton_discos').addEventListener("click", () => {
    filtrarPorCategoria("discos");
});
document.getElementById('boton_buje').addEventListener("click", () => {
    filtrarPorCategoria("buje");
});
document.getElementById('boton_anillos').addEventListener("click", () => {
    filtrarPorCategoria("anillos");
});
document.getElementById('boton_banda').addEventListener("click", () => {
    filtrarPorCategoria("banda");
});
document.getElementById('boton_rodamiento').addEventListener("click", () => {
    filtrarPorCategoria("rodamiento");
});
document.getElementById('boton_farol').addEventListener("click", () => {
    filtrarPorCategoria("farol");
});
document.getElementById('boton_reten').addEventListener("click", () => {
    filtrarPorCategoria("reten");
});
document.getElementById('boton_pinza').addEventListener("click", () => {
    filtrarPorCategoria("pinza");
});