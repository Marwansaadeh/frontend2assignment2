import React from 'react'
import {Component} from 'react'
import Weatherinfo from './Weatherinfo'
import Searchform from './Searchform'
import FivedaysforecastConainer from './FivedaysforecastConainer'
class Weatherconainer extends React.Component
{
    constructor(props)
    { 
        super(props)

        this.state={
            cityname:'',
            weathermain:'',
            weathericon:'',
            currenttemperature:'',
            mintemperature:'',
            maxtemperature:'',
            searchcity:'Stockholm',
           
           
        };
    }
    componentDidMount=()=>
    {
        this.AssignData()
       
    } 
    handelChange=(a)=>
    {
        if(a.target.value=='')
        {

            this.state.searchcity='Stockholm'
            this.componentDidMount()
           
        }
        else{
            this.setState(
                { 
                  [a.target.name]:a.target.value, 
               } )
 }


    }

    async AssignData()
    {
     
    this.GetData()
    .then(data=>
      this.setState({
      cityname:data.name,
     weathermain:data.weather[0].main,
     currenttemperature:data.main.temp,
     weathericon:data.weather[0].icon,
     mintemperature:data.main.temp_min,
     maxtemperature:data.main.temp_max,
    
      }))
    }

    async GetData()
{
   
    return await fetch("http://api.openweathermap.org/data/2.5/weather?q="+this.state.searchcity+"&units=metric&APPID=096861cbf2f772bfdbc562e6181a1c69")
    .then(response=>
        {
            if(!response.ok)
            {
               alert("Write a valid city")
              this.refreshPage()
            }
         return response.json()
        }
        
        )
    
}
refreshPage=()=>{ 
    window.location.reload(); 
}
 
    handelSubmit=(event)=>
    {
        event.preventDefault()
             this.componentDidMount()

    }

    render()

{
     return(
            <React.Fragment>   

   <div style={{ padding:"5%", textAlign:"center", backgroundColor:"gray"}}>


<div style={{float:"right", marginBottom:"2%"}}>
<Searchform handelChange={this.handelChange} handelSubmit={this.handelSubmit} />
</div>
<div style={{float:"left", marginLeft:"40%",textAlign:"center",marginTop:"9%", padding:"1%"}}>
<Weatherinfo weatherinfo={this.state}/>
</div>

   </div ><br></br>
<div style={{ marginTop:"23%", textAlign:"center", backgroundColor:"DodgerBlue"}}>
  
<FivedaysforecastConainer city={this.state.searchcity}/>
</div>

</React.Fragment>

        )
}

    
}
    

export default Weatherconainer