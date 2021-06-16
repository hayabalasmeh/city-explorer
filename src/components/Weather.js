

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { WeatherDay } from './WeatherDay';


export class Weather extends Component {

    constructor(props){
        super(props);
        this.state={
            
            
            
        }
    }
    
    
    render() {
        return (
            <div>
               
                

                { this.props.forcastData.map(item=>{
                    return (  <WeatherDay date={item.date} description={item.description} />
                 )

                })}
           
                 
              
                    
            </div>
        )
    }
}

export default Weather
