import React from 'react'
import {Component} from 'react'
import Fivedaysforecast from './Fivedaysforecast'
import ShowfivedaysForecast from './ShowfivedaysForecast'
class FivedaysforecastConainer extends React.Component
{
    constructor(props)
    { 
        super(props)

        this.state={
          
            isSubmitted:false, 
            data:[],
            cityname:'',
            value: ''
          
        };
    }
      
    
    componentDidMount=()=>
    {
        fetch("http://api.openweathermap.org/data/2.5/forecast?q="+this.props.city+"&units=metric&APPID=096861cbf2f772bfdbc562e6181a1c69")
        .then(response=>response.json())
        .then(data => {
            let tmpArray= []
            let daydate;
            let currentdate=new Date().getDay();
            for (let item of data.list) {
                let date=item.dt_txt.substr(0, 10);
                let day=new Date(item.dt_txt).getDay();
                console.log(date)
                
                if(daydate!=date&&day!=currentdate)
                {
                daydate=date;
                tmpArray.push(item)
                }
               
            }
           
            this.setState({
                data:tmpArray,
              
                
            })
        });
    } 
    

  

    handelSubmit=(event)=>
    {        
       
    event.preventDefault()       

    this.componentDidMount()

    this.setState({isSubmitted:true ,cityname:this.props.city})       


    }
    
    Getcity=()=>{

     {this.state.cityname=this.props.city}
 
    }
   
    render(){
        return(
           <div style={{ padding:"3%", textAlign:"center", backgroundColor:"gray",marginBottom:"5%"}}>
 <ShowfivedaysForecast handelSubmit={this.handelSubmit} Cityname= {this.props.city} />
 <Fivedaysforecast weatherinfo={this.state.data} Sumbmitted={this.state.isSubmitted} city={this.state.cityname} city2={this.props.city}/>

</div>

        )
    }
    
}
export default FivedaysforecastConainer