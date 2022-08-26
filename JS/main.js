function onClick (event){
    // anula el evento por defecto del boton en el formulario (para poder procesar los campos antes)
    event.preventDefault();

    const mensaje = {
        comercio: document.getElementById('comercio').value,
        titular: document.getElementById('titular').value,
        celular: document.getElementById('celular').value,
        email: document.getElementById('email').value,
        cuit: document.getElementById('cuit').value
    }
    console.log(mensaje);


    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(mensaje),
        headers: { "Content-type": "application/json; charset=UTF-8" },
    })
        .then((response) => response.json())
        .then((json) => { 
            console.log(json);
            Swal.fire(
                'Datos Enviados',
                'Gracias por Registrarte', 
                'success'
            );
            //limpiar formulario
            cleanForm();
        })
}

function cleanForm() {
    let formulario = document.getElementById('formulario');    
    formulario.reset(); //los input se ponen en blanco   
}

/* aca empieza la ejecucion del codigo, con el boton enviar */
let boton = document.getElementById("enviar");
boton.addEventListener("click", onClick); // cuando se captura el clic del boton, se ejecuta la funcion onClic





/* API clima */
async function getIp() {
    try { 
        let responseClima = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=-24.183241513504793&lon=-65.33131935975862&units=metric&appid=67823e81057e9209280832cf8105fa65");
        let locationResponse = await responseClima.json();
        console.log(locationResponse);
        console.log(locationResponse.weather[0].description);
        
        let title = document.getElementById("climaContentTitle");
        let icon = document.getElementById("climaContentIcon");
        let temp = document.getElementById("climaContentTemp");
        // innerHTL inyecta el codigo en la pagina
        title.innerHTML = locationResponse.name;

        // para renderizar el icon, usamos la url http://openweathermap.org/img/wn/10d@2x.png, donde "10d" es el icon que recibimos
        icon.innerHTML = "<img src='http://openweathermap.org/img/wn/" + locationResponse.weather[0].icon + "@2x.png'>";
        // con Math.roud redondeo el clima a entero.
        temp.innerHTML = Math.round(locationResponse.main.temp) + " °C";

    } catch { 
      console.log("Algo paso, no se pudo resolver...");
    }
  }
  getIp();

  // lat: -24.183241513504793 
  // long: -65.33131935975862
  // apkey: 67823e81057e9209280832cf8105fa65
  

  