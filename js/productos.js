document.addEventListener("DOMContentLoaded", function(){
    fetch(`js/datos.json`)
        .then(Response=>Response.json())
        .then(data => {
            var infoProducto = '';

            data.producto.forEach(producto => {
                
            infoProducto +=

            infoProducto.innerHTML =`
            <img src=" ${producto.imagen}">
            <p>Id : ${producto.id}</p>
            <p>Nombre : ${producto.nombre}</p>
            <p>precio : s/ ${producto.precio}</p>
            <p>stock : ${producto.stock}</p>
            <p>categoria : ${producto.categoria}</p>
            <p>marca : ${producto.marca}</p>
            <p>disponibilidad : ${producto.disponibilidad}</p>

            `
            document.getElementById('infoProducto').innerHTML=infoProducto
            });
        })

})