const apikey = "bbfcfeb3e8be1803276b0e5a18961b87";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
var humid="%";
var data;
var main;
var hum="Humidity"
var degree='°C';
   function insert()
   {
    weather();
   }

async function weather() {
    var city= document.getElementById('input').value;
   
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apikey}`;
    const wheatherData = await fetch(url).then(response => response.json());
    console.log(wheatherData);
    data=wheatherData.main.temp;
    main=parseInt(data)
    document.querySelector( ".temp").innerHTML=main+degree;
    const WeatherIcon=document.querySelector( ".Icon");
    document.querySelector( ".wheather").innerHTML=wheatherData.weather[0].main;
    document.querySelector( ".city").innerHTML=city;
    document.querySelector( ".speed").innerHTML=hum;
    document.querySelector( ".humidity").innerHTML=wheatherData.wind.speed+humid;
    if(wheatherData.weather[0].main=="Haze")
        {
            WeatherIcon.src="th.jpeg"
            WeatherIcon.style.display="block";
        }
       else if(wheatherData.weather[0].main=="Clouds")
            {
                WeatherIcon.src="clouds.jpeg"
                WeatherIcon.style.display="block";
            }
            else if(wheatherData.weather[0].main=="Rain")
                {
                    WeatherIcon.src=" rain.jpeg"
                    WeatherIcon.style.display="block";
                }
                else if(wheatherData.weather[0].main=="Clear")
                    {
                        WeatherIcon.src=" clear.jpeg"
                        WeatherIcon.style.display="block";
                    } 
                    else if(wheatherData.weather[0].main=="Thunderstorm")
                        {
                            WeatherIcon.src=" thunder.jpeg"
                            WeatherIcon.style.display="block";
                        }  
                        else if(wheatherData.weather[0].main=="Mist")
                            {
                                WeatherIcon.src=" mist.jpeg"
                                WeatherIcon.style.display="block";
                            }              
            else
            {
                WeatherIcon.style.display="none";
            }
            
}


