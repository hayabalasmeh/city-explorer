import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import axios from 'axios';

export class Weather extends Component {

    constructor(props){
        super(props);
        this.state={
            forcastData:'',
        }
    }
    displayingWeather= async()=>{
    let weatherUrl= 'https://localhost:3030/weather?lon=151.21&lat=-33.87&searchQuery=Sydney';
    
        let weatherResult = await axios.get(weatherUrl);
      console.log(weatherResult);
      this.setState({
        forcastData: weatherResult,
        // display:true,
        // errorMessege:false,
      })
    
   
    }
    render() {
        return (
            <div>
                <Button variant="primary" type="submit" onClick={this.displayingWeather}>
                 Weather Forcast
                </Button>
                

                {/* { this.state.forcastData.map(item=>{
                   return <p>{`The day date is ${item.date} and the weather forcast is ${item.description}`}</p>
                })} */}
            {/* /* //    return (  <Card style={{ width: '18rem' }}>
            //       <ListGroup variant="flush">
            //           <ListGroup.Item>{item.date}</ListGroup.Item>
            //           <ListGroup.Item>{item.description}</ListGroup.Item>
                      
            //       </ListGroup>
            //       </Card>) */}
                 
              
                    
            </div>
        )
    }
}

export default Weather
