document.addEventListener("DOMContentLoaded", function(){
    fetch(`https://randomuser.me/api`)
        .then(Response => Response.json())
        .then(data => {
            var user = data.results[0];
            var userinfo = document.getElementById("userinfo");
            userinfo.innerHTML = `
            <img src=${user.picture.large}>
            <p> nombre: ${user.name.title} ${user.name.first} ${user.name.last}</p>
            <p> genero: ${user.gender}</p>
            <p> correo: ${user.email}</p>
            <p> telefono: ${user.phone}</p>
            <p> nombre de la calle: ${user.location.street.name}</p>
            <p> numero de la calle: ${user.location.street.number}</p>

            `
        })
});

