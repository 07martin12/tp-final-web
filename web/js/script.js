const navSecciones = ["sillas y bancos", "mesas", "estanterías", "camas", "percheros y cómodas", "decoración"];

const productos = [
    {
        nombre: "Silla de Oficina",
        imagen: "img/silla_oficina.jpg",
        material: "hierro",
        categoria: "sillas y bancos",
        precio: 15000.0,
        stock: 100,
        especificaciones: {
            largo: 50,
            ancho: 60,
            grosor: 3
        }
    },

    {
        nombre: "Banco de Madera",
        imagen: "img/banco_madera.jpg",
        material: "madera de roble",
        categoria: "sillas y bancos",
        precio: 8000.0,
        stock: 75,
        especificaciones: {
            largo: 120,
            ancho: 40,
            grosor: 4
        }
    },

    {
        nombre: "Mesa de Comedor",
        imagen: "img/mesa_comedor.jpg",
        material: "madera y hierro",
        categoria: "mesas",
        precio: 35000.0,
        stock: 30,
        especificaciones: {
            largo: 180,
            ancho: 90,
            grosor: 2.5
        }
    },

    {
        nombre: "Mesa de Café",
        imagen: "img/mesa_cafe.jpg",
        material: "madera de cerezo",
        categoria: "mesas",
        precio: 12000.0,
        stock: 50,
        especificaciones: {
            largo: 100,
            ancho: 50,
            grosor: 1.5
        }
    },

    {
        nombre: "Estantería de Pared",
        imagen: "img/estanteria_pared.jpg",
        material: "metal y madera",
        categoria: "estanterías",
        precio: 9000.0,
        stock: 40,
        especificaciones: {
            largo: 100,
            ancho: 30,
            grosor: 2
        }
    },

    {
        nombre: "Estantería Modular",
        imagen: "img/estanteria_modular.jpg",
        material: "madera",
        categoria: "estanterías",
        precio: 15000.0,
        stock: 20,
        especificaciones: {
            largo: 120,
            ancho: 35,
            grosor: 3
        }
    },

    {
        nombre: "Cama King Size",
        imagen: "img/cama_king_size.jpg",
        material: "madera de pino",
        categoria: "camas",
        precio: 45000.0,
        stock: 15,
        especificaciones: {
            largo: 200,
            ancho: 180,
            grosor: 5
        }
    },

    {
        nombre: "Cama Individual",
        imagen: "img/cama_individual.jpg",
        material: "madera de abeto",
        categoria: "camas",
        precio: 20000.0,
        stock: 60,
        especificaciones: {
            largo: 190,
            ancho: 90,
            grosor: 3
        }
    },

    {
        nombre: "Perchero de Pie",
        imagen: "img/perchero_pie.jpg",
        material: "acero inoxidable",
        categoria: "percheros y cómodas",
        precio: 5000.0,
        stock: 150,
        especificaciones: {
            largo: 40,
            ancho: 30,
            grosor: 2
        }
    },

    {
        nombre: "Cómoda de 4 Cajones",
        imagen: "img/comoda_4_cajones.jpg",
        material: "madera de pino",
        categoria: "percheros y cómodas",
        precio: 25000.0,
        stock: 30,
        especificaciones: {
            largo: 80,
            ancho: 45,
            grosor: 2.5
        }
    },

    {
        nombre: "Lámpara de Mesa",
        imagen: "img/lampara_mesa.jpg",
        material: "cristal y metal",
        categoria: "decoración",
        precio: 5000.0,
        stock: 80,
        especificaciones: {
            largo: 25,
            ancho: 25,
            grosor: 1
        }
    },

    {
        nombre: "Espejo Decorativo",
        imagen: "img/espejo_decorativo.jpg",
        material: "madera",
        categoria: "decoración",
        precio: 8000.0,
        stock: 40,
        especificaciones: {
            largo: 80,
            ancho: 60,
            grosor: 3
        }
    }
];

const nav = document.querySelector("#navPrincipal");
const catalogo = document.querySelector("#catalogo");

const div = document.createElement("div");
const img = document.createElement("img");
const lista = document.createElement("ul");
const li = document.createElement("li");
const link = document.createElement("a");
const p = document.createElement("p");

cargarNavegador();
cargarCatalogo();


function cargarNavegador() {
    lista.textContent = ""; 

    for (let pos = 0; pos < navSecciones.length; pos++) {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.href = "#catalogo";
        link.classList.add("categoria");
        link.textContent = navSecciones[pos];
        li.appendChild(link);
        lista.appendChild(li);
    }
   nav.appendChild(lista); 
   activarEnlaces();
}

function activarEnlaces() {
    const enlaces = document.querySelectorAll(".categoria");
    for (let i = 0; i < enlaces.length; i++) {
        enlaces[i].addEventListener("click", cargarCatalogo);
    }
}

function activar_btn_seleccion () {
    const btn_seleccion = document.querySelectorAll(".añadir");
    for (let i = 0; i < btn_seleccion.length; i++) {
        btn_seleccion[i].addEventListener("click", addProducto);
    }
}

function cargarCatalogo(event) {
    catalogo.innerHTML = ""; 

    let categoria = event ? event.target.textContent : "mesas"; 

    for (let i = 0; i < productos.length; i++) {
        if (productos[i].categoria === categoria) {
            const divProducto = document.createElement("div"); 
            divProducto.appendChild(formatearProducto(i));
            divProducto.classList.add("tarjeta");
            catalogo.appendChild(divProducto); 
        }
    }
    activar_btn_seleccion();
}

function formatearProducto(i) {
    const divProducto = document.createElement("div");
    divProducto.classList.add("producto");
    divProducto.classList.add("datosDelProducto"); 

    const divImg = document.createElement("div");
    const img = document.createElement("img");
    img.src = productos[i].imagen;
    divImg.classList.add("divImg");
    divImg.appendChild(img);

    const div_1 = cargarDiv_1(i);
    const div_2 = cargarDiv_2(i);
    const div_3 = cargarDiv_3(i);

    divProducto.appendChild(divImg);
    divProducto.appendChild(div_1);
    divProducto.appendChild(div_2);
    divProducto.appendChild(div_3);

    return divProducto; 
}

function cargarDiv_1(i) {
    const divDetalles = document.createElement("div");
    divDetalles.classList.add("detalles");

    const lista = document.createElement("ul");

    const li_1 = document.createElement("li");
    li_1.textContent = "Nombre: " + productos[i].nombre;

    const li_2 = document.createElement("li");
    li_2.textContent = "Material: " + productos[i].material;

    const li_3 = document.createElement("li");
    li_3.textContent = "Stock: " +productos[i].stock;

    const li_4 = document.createElement("li");
    li_4.textContent = "Precio: " +  productos[i].precio;

    lista.appendChild(li_1);
    lista.appendChild(li_2);
    lista.appendChild(li_3);
    lista.appendChild(li_4);

    divDetalles.appendChild(lista);
    return divDetalles; 
}

function cargarDiv_2(i) {
    const div = document.createElement("div");
    div.textContent = ""; 
    div.classList.add("detallesDimensiones");

    const p = document.createElement("p");
    p.textContent = "Dimensiones";

    const lista = document.createElement("ul");

    const li_1 = document.createElement("li");
    li_1.innerHTML = "Largo: " + productos[i].especificaciones.largo;

    const li_2 = document.createElement("li");
    li_2.innerHTML = "Ancho: " + productos[i].especificaciones.ancho;

    const li_3 = document.createElement("li");
    li_3.innerHTML = "Altura: " + productos[i].especificaciones.grosor;

    lista.appendChild(li_1);
    lista.appendChild(li_2);
    lista.appendChild(li_3);

    div.appendChild(p);
    div.appendChild(lista);

    return div;
}

function cargarDiv_3(i) {
    const div = document.createElement("div");
    div.classList.add("divFlex");

    const id = document.createElement("input");
    id.type = "hidden";
    id.value = i; 
    id.classList.add("idProducto"); 

    const cant_Productos = document.createElement("input");
    cant_Productos.type = "number";
    cant_Productos.value = 1;
    cant_Productos.classList.add("unidades");
    cant_Productos.min = 1;
    cant_Productos.max = productos[i].stock;
    cant_Productos.required = true; 

    const btn = document.createElement("button");
    btn.classList.add("añadir");
    btn.textContent = "Añadir";

    div.appendChild(btn);
    div.appendChild(cant_Productos);   
    div.appendChild(id);

    return div;
}

const productosSeleccionados = new Array (3); 
const seleccion = document.querySelector ("#guardados");
const costoTotal = document.querySelector ("#costoTotal");  
const btnLimpiar = document.createElement ("button");
const btnComprar = document.createElement ("button");

let costoFinal = 0;

function addProducto(event) {
    const botonClickeado = event.target;
    const contenedor = botonClickeado.closest(".divFlex");
    const idProducto = contenedor.querySelector(".idProducto").value;
    
    btnLimpiar.textContent = "limpiar"; 
    btnLimpiar.id = "limpiar";
  
    btnComprar.textContent = "comprar"; 
    btnComprar.id = "comprar";
   
    costoTotal.appendChild (btnComprar);
    costoTotal.appendChild (btnLimpiar);

    costoFinal += productos [idProducto].precio; 
    p.textContent = "";
    p.textContent = "costo total: " + costoFinal; 
    costoTotal.appendChild (p);

    if (sinRepeticiones (idProducto)) {
        if (listarProducto (idProducto)) {
            cargarProducto(idProducto);
        } else {
            alert ("carrito lleno, finalize su anterior compra para poder continuar");
        }
        
        btnLimpiar.addEventListener("click", limpiarCarrito);
        btnComprar.addEventListener("click", realizarCompra);
        
    } 

    function limpiarCarrito() {
        let aux = new Array(3)
        productosSeleccionados.slice (aux); 
        costoFinal = 0; 
        p.textContent = "Costo total: 0";  
        seleccion.innerHTML = "";  
        costoTotal.innerHTML = ""; 
        alert("Carrito vaciado. Puede continuar comprando.");
    }

    function realizarCompra() {
        alert("¡Gracias por tu compra! El total de tu compra es: " + costoFinal);
        limpiarCarrito();  
    }
}

function cargarProducto(idProducto) {
    const divSeleccionado = document.createElement("div");
    divSeleccionado.classList.add ("divFlex");
    divSeleccionado.classList.add("productoSeleccionado");

    const divImg = document.createElement("div");
    const img = document.createElement("img");
    img.src = productos[idProducto].imagen;

    const nombre = document.createElement("p");
    nombre.textContent = productos[idProducto].nombre;

    divImg.appendChild(img);
    divImg.appendChild(nombre);
    
    divSeleccionado.appendChild(divImg);
    seleccion.appendChild(divSeleccionado); 
}

function sinRepeticiones (idProducto) {
    for (let i = 0; i < productosSeleccionados.length; i++) {
        if (productosSeleccionados [i] === idProducto) {
             return false;
        }
    }
    return true; 
}

function listarProducto (idProducto) {
    for (let i = 0; i < productosSeleccionados.length; i++) {
        if (productosSeleccionados [i] === undefined) {
            productosSeleccionados [i] = idProducto;
            return true;
        } 
    }

    return false; 
}