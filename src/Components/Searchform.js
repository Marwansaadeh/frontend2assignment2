import React from 'react'
import FivedaysforecastConainer from './Fivedaysforecast'
function Searchform(props)
{
        
        return(
            
            <form onSubmit={props.handelSubmit}> 
            <input type="text" className=""form-control name="searchcity"onChange={(a)=>props.handelChange(a)}/>

            <button className="btn-primary">Search</button>
         </form>
        )
   
}
export default Searchform