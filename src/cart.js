const listaProductos = document.querySelector("#product-container");
const listaCarrito = document.querySelector("#container-cart");
const cantidadProductos = document.querySelector("#unidades");
const totalPrecio = document.querySelector("#precio");

let  almacenarProductos = [];

listaProductos.addEventListener('click', e =>{
    if(e.target.classList.contains("btn-add")){
        const producto = e.target.parentElement;

        const info = {
            unidad: 1,
            precio: producto.querySelector(".precio-producto").textContent,
            descripcion: producto.querySelector(".descripcion-producto").textContent,
            img: producto.querySelector("img").textContent
        };
        const existe = almacenarProductos.some(almacenar => almacenar.descripcion === info.descripcion);
        if(existe){
            const productos = almacenarProductos.map(almacenar =>{
                if(almacenar.descripcion === info.descripcion){
                    almacenar.unidad++;
                    return almacenar;
                }else{
                    return almacenar;
                }
                
            })
            almacenarProductos = [...productos];
        }else
        {

        almacenarProductos = [...almacenarProductos, info];
        }

        mostrarCarrito();
    }
});

listaCarrito.addEventListener('click', e =>{
    if(e.target.classList.contains("drop")){
        const producto = e.target.parentElement;
        const descripcion = producto.querySelector('span').textContent;
        
        almacenarProductos = almacenarProductos.filter( producto =>
            producto.descripcion !== descripcion
            );
            mostrarCarrito();
    }
})


const mostrarCarrito = () => {
    let total = 0; 
    let totalProducto = 0;

    let body = "";
    almacenarProductos.forEach(almacenar => {
        body += `
            <div><p>${almacenar.unidad} <span>${almacenar.descripcion}</span> <b>${almacenar.precio} </b><button class="drop"> x </button></p>
            
            </div>
        `
        totalProducto = totalProducto + almacenar.unidad;
        total = total + parseInt(almacenar.unidad * almacenar.precio.slice(1,- 3));
    });
   
    document.getElementById('productos-cart').innerHTML = body;
    cantidadProductos.innerText = totalProducto;
    totalPrecio.innerText = `${total} COP`;

}