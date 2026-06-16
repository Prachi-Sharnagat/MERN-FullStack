// weatherApp
// api is needed 

const search = document.getElementById("button-click");
const city = document.getElementById('location');
// const NameOfCity = console.log(city.value)
async function getData(cityName){
    const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=a3b286daad8d4cc0a58115308261005&q=${cityName}&aqi=yes`);
    return await promise.json();
}
// promise return function

const cityName = document.getElementById('namePlace')
const cityTime = document.getElementById('city-time')
const cityTemp = document.getElementById('city-temp')

// dyanamic way : string pollation 
// ${value}; + ``

search.addEventListener('click', async()=>{
    // console.log(city); // gives html
    //  https://api.weatherapi.com/v1/current.json?key=a3b286daad8d4cc0a58115308261005&q=London&aqi=yes
   const value = city.value;
   const longitudeAndLatitude = navigator.geolocation.getCurrentPosition(getSuccessResponse , getError);

  const result = await getData(value); // getdata return promise therefore function async a+ await
    // console.log(result);
    cityName.innerText = `${result.location.name}, ${result.location.region}`
    cityTime.innerHTML = `${result.location.localtime}`;
    cityTemp.innerHTML = `${result.current.temp_c}`;
})  

// lets pass longitude and latitude of my current location 