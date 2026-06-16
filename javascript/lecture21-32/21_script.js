// user current location fetch hwo ?
const loc = document.getElementById('user-location')
const btn = document.getElementById('btn');

async function getData(lat, long){
    const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=a3b286daad8d4cc0a58115308261005&q=${lat}, ${long}&aqi=yes`);
    return await promise.json();
}

function failedTogetResponse(error){
    console.log("there is an issue : ", Error.message);
}

async function successResponse(position){
    // console.log(position);
  const result =  await getData(position.coords.latitude, position.coords.longitude)
  console.log(result);
  loc.innerText = `${result.location.name}, ${result.location.region}`;

}

btn.addEventListener('click', async ()=>{
     navigator.geolocation.getCurrentPosition(successResponse,failedTogetResponse);
// it return two callback function 
// first -> response
// second -> error
// alert(loc);

    // await getData();
});