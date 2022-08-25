async function getIp() {
    try { 
      /*  
      let response = await fetch("https://api.ipify.org/?format=json"); 
      let ipResponse = await response.json(); 
      console.log(ipResponse);
  
      let responseLocation = await fetch("http://ip-api.com/json/" + ipResponse.ip);
      let locationResponse = await responseLocation.json();
      console.log(locationResponse);
      */

      let responseClima = await fetch("http://api.openweathermap.org/data/2.5/forecast?lat=-24.183241513504793&lon=-65.33131935975862&appid=67823e81057e9209280832cf8105fa65");
    
    } catch { 
      console.log("Algo paso, no se pudo resolver...");
    }
  }
  getIp();

  //-24.183241513504793, -65.33131935975862