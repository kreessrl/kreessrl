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

    // DiscoF --- discof
    new Producto(1, "Disco de Corte", "$", "1 172.00$", 'PLAYWOOD (7025 X 140T X 5/8")', "discof", 0),
    new Producto(2, "Disco de Corte", "$", "1 257.74$", 'PLAYWOOD (705 X 180T X 5/8")', "discof", 0),
    new Producto(3, "Disco de Sierra", "$", "3 354.42$", '"10(10" X 60T X 7/8")', "discof", 0),


    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Lima --- lima

    new Producto(101, "Lima", "$", "1 862.84$", "P/Motosierra 5.5mm X 3pcs", "lima", 0),
    new Producto(102, "Lima", "$", "2 540.82$", 'NO.221 Plana 10"m/plast', "lima", 0),


    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Sierras --- sierras

    // new Producto(201, "Sierras", "6.41$", "1 761.72$", "HYUNDAY", "sierras", 1),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Clavo --- clavo

    new Producto(301, "Clavo de Alambre", "$", "32 574.43$", "HYUNDAY", "clavo", 1),

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
    new Producto(1, "Bateria 12V 200AH", "330.00$", "131 769.10$", "No Registrada", "baterias", 0),
    new Producto(1, "Bateria 12V 155AH", "285.00$", "113 138.35$", "No Registrada", "baterias", 0),
    new Producto(1, "Bateria 12V 115AH", "240.00$", "93 063.46$", "No Registrada", "baterias", 0),
    new Producto(1, "Bateria 12V 110AH", "210.00$", "83 351.62$", "No Registrada", "baterias", 0),
    new Producto(1, "Bateria 12V 75AH", "145.00$", "57 384.40$", "No Registrada", "baterias", 0),


    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Filtros
    new Producto(101, "Bombin de Petroleo", "26.69$", "9 609.88$", "Pendiente", "filtros", 15),
    new Producto(102, "Filtro de Gasolina", "6.41$", "1 761.72$", "HYUNDAY", "filtros", 2),
    new Producto(103, "Filtro Decantador de Agua", "14.04$", "3 862.23$", "HYUNDAY", "filtros", 2),
    new Producto(104, "Filtro De Aire", "$", "2 108.48$", "HYUNDAY", "filtros", 2),
    new Producto(105, "Filtro Diesel", "3.60$", "1 187.02$", "MITSUBISHI L200/L300", "filtros", 0),
    new Producto(106, "Filtro Diesel", "3.50$", "1 155.01$", "NISSAN SD23/TD27(02N10)", "filtros", 0),
    new Producto(107, "Filtro Diesel", "3.49$", "1 152.42$", "TOYOTA 2L/3L", "filtros", 0),
    new Producto(108, "Filtro Diesel", "3.50$", "1 159.91$", "MITSUBISHI CANTER/ROSA 4D30", "filtros", 0),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Neumáticos
    new Producto(201, "Neumático Delantero 500*8", "$", "14 346.41$", "No Registrado", "neumaticos", 0, "../IMG/Automotriz/neumatico.jpg"),
    new Producto(202, "Neumático Trasero 6 50*10", "$", "16 692.81$", "No Registrado", "neumaticos", 0,),


    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Amortiguación
    new Producto(301, "Amortiguador Derecho", "77.64$", "21 292.07$", "Atos", "amortiguacion", 1),
    new Producto(302, "Amortiguador Isquierdo", "77.64$", "21 292.07$", "Atos", "amortiguacion", 1),


    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Aceites

    new Producto(401, "Aceite", "7.12$", "2 546.09$", "15W40 Diesel API CH-4(5L)", "aceites", 0),
    new Producto(402, "Aceite", "7.12$", "2 545.59$", "15W40 Gasolina API SL(5L)", "aceites", 0),
    new Producto(403, "Aceite de Transmision Automatica", "11.57$", "4 136.58$", "CVT (1L)", "aceites", 0),
    new Producto(404, "Liquido de Freno", "12.11$", "4 328.70$", "(500ml)", "aceites", 0),
    new Producto(405, "Grasa de Calcio Multiuso", "9.62$", "3 340.22$", "MP3 (1Kg)", "aceites", 0),


    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Frenos
    new Producto(501, "Taco de Freno", "$", "5 077.34$", "TOYOTA HIACE", "frenos", 0),
    new Producto(502, "Banda de Freno de Emergencia", "67.58$", "8 110.00$", "No Registrado", "frenos", 0),
    new Producto(503, "Juego de Banda de Freno", "22.97$", "7 692.57$", "TRUCK", "frenos", 0),


    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Kit de Reparacion --- kit

    new Producto(601, "Kit de Reparacion EMP", "35.42$", "11 687.39$", "TOYOTA 2L(54083)", "kit", 0),
    new Producto(602, "Kit de Reparacion", "$", "9 717.82$", "TOYOTA 5L(54280)", "kit", 0),
    new Producto(603, "Kit de Reparacion", "$", "11 824.99$", "TOYOTA 3L", "kit", 0),
    new Producto(604, "Kit de Reparacion", "$", "6 470.86$", "MITSUBISHI Lanser(781041/M)", "kit", 0),
    new Producto(605, "Kit de Reparacion", "33.74$", "11 134.28$", "NISSAN TD27(3685M)", "kit", 0),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Juntas --- juntas

    
    new Producto(701, "Tapa de BLOCK", "$", "3 733.98$", "4D-30", "juntas", 0),
    new Producto(702, "Tapa de BLOCK", "$", "4 078.62$", "LD-20", "juntas", 0),
    new Producto(703, "Junta de Inyectores", "0.64$", "175.37$", "No Registrado", "juntas", 0),
    new Producto(704, "Retente Aceite Ruedas Delanteras", "0.88$", "243.13$", "No Registrado", "juntas", 0),
    new Producto(705, "Retente de Aceite", "1.30$", "358.72$", "No Registrado", "juntas", 0),
    new Producto(706, "Sello de Aceite C/V", "3.99$", "1 096.09$", "No Registrado", "juntas", 0),


    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Bujias --- bujias

    new Producto(801, "Calentador de Bujias", "$", "1 150.91$", "TOYOTA 5L", "bujias", 0),
    new Producto(802, "Bujia", "$", "1 365.61$", "LD-20", "bujias", 0),
    new Producto(803, "Calentador de Bujias", "3.57$", "1 177.76$", "MITSUBISHI 4D 5612V(PEO7)", "bujias", 0),
    new Producto(804, "Calentador de Bujias", "3.59$", "1 185.73$", "ISUSU 4J4/4 JB1 11V(p*59)", "bujias", 0),


    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Esfericas Superiores --- esfericas superiores

    new Producto(901, "Esfericas Superior", "$", "4 328.36$", "HIACE", "esfericas superiores", 0),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Correas --- correas

    new Producto(1001, "Correa", "7.86$", "1 160.30$", "No Registrada", "correas", 0),
    new Producto(1002, "Correa", "$", "3 537.57$", "L2-20", "correas", 0),
    new Producto(1003, "Correa de Tiempo", "$", "2 302.63$", "No Registrada", "correas", 0),


    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Discos --- discos

    new Producto(1101, "Disco de Freno", "$", "9 402.03$", "MITSUBISHI MONTERO/L200 4WD", "discos", 0),
    new Producto(1102, "Disco de Embrage", "48.55$", "13 352.38$", "HYUNDAY", "discos", 0),
    new Producto(1103, "Disco de Embrage", "$", "13 832.57$", "TOYOTA 2L/3L/3Y", "discos", 0),
    new Producto(1104, "Disco de Embrage", "$", "15 107.72$", "TOYOTA 3L(35121)", "discos", 0),


    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Buje --- buje

    new Producto(1201, "Buje", "0.97$", "267.05$", "No Registrado", "buje", 1),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Anillos --- anillos

    new Producto(1301, "Anillos", "$", "8 868.33$", "STD TOYOTA 3L", "anillos", 0),
    new Producto(1302, "Anillos", "$", "8 323.33$", "STD TOYOTA 2L(5929)", "anillos", 0),


    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Banda --- banda

    // new Producto(1401, "Banda", "35$", "9 402.03$", "Francia", "banda", 1),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Rodamiento --- rodamiento

    new Producto(1501, "Rodamiento Trasero Conico", "20.83$", "5 727.57$", "No Registrado", "rodamiento", 2),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Farol --- farol

    new Producto(1301, "Farol Trasero", "51.93$", "14 281.07$", "No Registrada", "farol", 0),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Reten --- reten

    new Producto(1601, "Reten", "35$", "9 402.03$", "Francia", "reten", 1),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Pinza --- pinza

    new Producto(1701, "Pinza de Freno", "204.10$", "56 127.84$", "Tracero Derecho.27", "pinza", 1),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Biela --- biela

    new Producto(1801, "Metal Biela", "31.60$", "10 428.02$", 'MITSUBISHI STD 4D56(M"2D)', "biela", 0),
    new Producto(1802, "Juego de Metal Apoyo", "$", "14 421.98$", 'No Registrada', "biela", 0),
    new Producto(1803, "Juego de Metal Biela", "$", "3 979.80$", 'No Registrada', "biela", 0),

    new Producto(1804, "Metal de Bamcada", "$", "3 537.59$", 'NISSAN TD/27STD', "biela", 0),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Manguera --- manguera

    new Producto(1901, "Manguera de Entrada Del Radiador", "11.26$", "4051.97$", "No Espesificado", "manguera", 5),
    new Producto(1902, "Manguera de Salida Del Radiador", "11.26$", "4051.97$", "No Espesificado", "manguera", 5),
    new Producto(1903, "Manguera Corrugada 32 X 700", "15.38$", "5 536.25$", "No Registrado", "manguera", 10),
    new Producto(1904, "Manguera Corrugada 38 x 500", "11.26$", "4051.97$", "No Registrado", "manguera", 10),

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
        let cajaSecundaria = document.createElement("div");
        cajaSecundaria.classList.add("caja-secundaria");
        // Mostrar solo el nombre, la marca y el precio en la vista inicial
        cajaSecundaria.innerHTML = `<p><span class="producto_span">Nombre:</span> ${producto.nombre}</p>
                                     <p><span class="producto_span">Marca:</span> ${producto.marca}</p>
                                      <p><span class="producto_span">Precio CUP:</span> ${producto.precio_cup}</p>
                                     <p><span class="producto_span">Precio MLC:</span> ${producto.precio_mlc}</p>`;
        cajaContenedora.appendChild(cajaSecundaria)


        // Verificar si el producto tiene una imagen y establecerla como fondo
        if (producto.imagen) {
            cajaContenedora.style.backgroundImage = `url(${producto.imagen})`;
            cajaContenedora.style.backgroundSize = "cover";  // Para ajustar la imagen al contenedor
            cajaContenedora.style.backgroundPosition = "center"; // Centrar la imagen
        }

        if (this.cantidad == 0) {
            console.log("Ya estamos en 0")
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
        contenedorResultados.innerHTML = "<p>No se encontraron productos con ese nombre.</p>";
    }
}

// Prevenir la recarga del formulario
document.querySelector("form").addEventListener("submit", buscarProducto);

// Botones de categoría

// Ferreteria

document.getElementById("boton_discof").addEventListener("click", () => {
    filtrarPorCategoria("discof");
});
document.getElementById("boton_lima").addEventListener("click", () => {
    filtrarPorCategoria("lima");
});
//document.getElementById("boton_sierras").addEventListener("click", () => {
//    filtrarPorCategoria("sierras");
//});
document.getElementById("boton_clavo").addEventListener("click", () => {
    filtrarPorCategoria("clavo");
});

// --- --- Automotriz --- --- //

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
document.getElementById('boton_biela').addEventListener("click", () => {
    filtrarPorCategoria("biela");
});
document.getElementById('boton_manguera').addEventListener("click", () => {
    filtrarPorCategoria("manguera");
});