import React from 'react'
import FivedaysforecastConainer from './Fivedaysforecast'
function ShowfivedaysForecast(props)
{
        
        return(
            
            <form onSubmit={props.handelSubmit}> 
        <button className="btn-primary">Show five days forecast for <b>{props.Cityname}</b></button>
         </form>
        )
   
}
export default ShowfivedaysForecast