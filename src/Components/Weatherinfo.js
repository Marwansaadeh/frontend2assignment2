import React from 'react'
function Weatherinfo(props)
{
    let iconUrl="http://openweathermap.org/img/w/"+props.weatherinfo.weathericon+".png";

        return(
         
        <React.Fragment>
             <div><h4>{props.weatherinfo.cityname}</h4></div>
            <div>{props.weatherinfo.weathermain}</div>
            
            <img src={iconUrl}/>

            <div><h4>Current temprature: {props.weatherinfo.currenttemperature}</h4></div>
            <div><h4> Min Temprature: {props.weatherinfo.mintemperature}</h4></div>
            <div><h4> Max Temprature: {props.weatherinfo.maxtemperature}</h4> </div>
     </React.Fragment>
        )
}
export default Weatherinfo