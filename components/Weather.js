import React, { Component } from 'react'

export class Weather extends Component {

    constructor(props){
        super(props);

    }
    displayingWeather= async()=>{
    let weatherUrl= 'localhost:3030/weather?lon=151.21&lat=-33.87&searchQuery=Sydneyv';
    try {
        let weatherResult = await axios.get(weatherUrl);
      console.log(locationResult.data);
      this.setState({
        forcastData: weatherResult,
        display:true,
        errorMessege:false,
      })
    }
    catch {
     this.setState({
      errorMessege:true,
  
     })
    }
    }
    render() {
        return (
            <div>
                { this.state.forcastData.map(item=>{
                  <Card style={{ width: '18rem' }}>
                  <ListGroup variant="flush">
                      <ListGroup.Item>{item.date}</ListGroup.Item>
                      <ListGroup.Item>{item.description}</ListGroup.Item>
                      
                  </ListGroup>
                  </Card>
                })
              
                    }
            </div>
        )
    }
}

export default Weather
