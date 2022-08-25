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









// async function getIp() {
//     try { 
//       /*  
//       let response = await fetch("https://api.ipify.org/?format=json"); 
//       let ipResponse = await response.json(); 
//       console.log(ipResponse);
  
//       let responseLocation = await fetch("http://ip-api.com/json/" + ipResponse.ip);
//       let locationResponse = await responseLocation.json();
//       console.log(locationResponse);
//       */

//       let responseClima = await fetch("http://api.openweathermap.org/data/2.5/forecast?lat=-24.183241513504793&lon=-65.33131935975862&appid=67823e81057e9209280832cf8105fa65");
    
//     } catch { 
//       console.log("Algo paso, no se pudo resolver...");
//     }
//   }
//   getIp();

  //-24.183241513504793, -65.33131935975862

  