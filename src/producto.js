// fetch("http://127.0.0.1:5500",{"method": "POST",
//         "headers" :{"Content-Type": "http://localhost:3000/productos"} 
// })
//     .then(response => response.json())
//     .then(data => mostrarDatos(data))
//     .catch(err => console.log(err));
async function getGorras(){
    const res =  await fetch('http://localhost:3000/productos', {"method": "GET"});
    const resJson = await res.json();
     return resJson;
}
    
getGorras()
  .then(data => mostrarDatos(data))
  .catch(err => console.log(err));

const mostrarDatos = (data) => {

    let body = "";
    for (let i = 0; i < data.length; i++) {
        body += `
        <div class="card">
            <h3> ${data[i].equipo}</h3>
            <img src="${data[i].url_img}" alt="">
            <p class="descripcion-producto"> ${data[i].nombre} ${data[i].silueta} </p>
            <p class="precio-producto">$${data[i].precio} COP</p>
            <button class="btn-add">Añadir al carrito</button>
        </div>
        
        `;
        
        
    }
    
    document.getElementById('product-container').innerHTML = body;

}