import React from 'react'
class Fivedaysforecast extends React.Component
{
  constructor(props)
  { 
    super(props)
    
  }         

         render(){ 
        if(this.props.Sumbmitted==true&&this.props.city==this.props.city2)
    { 
           return(
            <div>                     

            {this.props.weatherinfo.map(item=>(

            <div  style={{float:"left", marginTop:"6%", marginLeft:"4%", marginBottom:"3%",padding:"1%", textAlign:"center", backgroundColor:"DodgerBlue"}}>                
            <div><h4>{this.props.city}</h4></div>
            <div>{item.dt_txt}</div>

            <img src={"http://openweathermap.org/img/w/"+item.weather[0].icon+".png"}/>

            <div>{item.weather[0].main}</div>
            <div> Min Temprature: {item.main.temp_min}</div>
            <div> Max Temprature: {item.main.temp_max} </div>
           
             </div>
            ))}
            
                   
           </div> 

           ) 
    }
   

else{
  return null
}

 
   }
   
  
   
     
   
   
      
}
export default Fivedaysforecast