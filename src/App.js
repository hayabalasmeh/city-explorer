


import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import Weather from './components/Weather';
import Movies from './components/Movies';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      display:false,
      locationData:'',
      errorMessege:false,
      forcastData:[],
      moviesData:[],
      error:'',
      cityName:'',
    }
  }
  
  renderCity = async (event) =>{
   
    let key1=process.env.REACT_APP_KEY
    event.preventDefault();
    this.state.cityName = event.target.cityName.value;
    // console.log(cityChoosed);
    let cityUrl = `https://us1.locationiq.com/v1/search.php?key=${key1}&q=${this.state.cityName}&format=json`; //result will be data in json file
    
    try {
      let locationResult = await axios.get(cityUrl);
    console.log(locationResult.data);
    this.setState({
      locationData: locationResult.data[0],
      display:true,
      errorMessege:false,
      error:'',
    })
    this.displayingWeather();
  this.displayMovie();
  }
  catch(error) {
   this.setState({
    errorMessege:true,
    error:`error is ${error}`,

   })

  }
  
  }
  displayingWeather= async()=>{
    let serverURL=process.env.REACT_APP_SERVER
    let weatherUrl= `${serverURL}/weather?lon=${this.state.locationData.lon}&lat=${this.state.locationData.lat}`;
    try{
    
        let weatherResult = await axios.get(weatherUrl);
      console.log(weatherResult.data);

      this.setState({
        forcastData: weatherResult.data,
       
      })
    }
   catch(error){
    this.setState({
     
      error:`error is ${error}`,
      
  
     })
     
   }
  }
  displayMovie = async()=>{

    // let cityChoosed= event.target.cityName.value;
    let serverURL=process.env.REACT_APP_SERVER
    let movieUrl= `${serverURL}/movies?searchQuery=${this.state.cityName}`;
    try{
    
        let moviesResult = await axios.get(movieUrl);
      console.log(moviesResult.data);

      this.setState({
        moviesData: moviesResult.data,
       
      })
    }
   catch(error){
    this.setState({
     
      error:`error is ${error}`,
  
  
     })
     
   }
  
  }
  render(){
    return (
     <div>
       <h1>Explore the Map of Any City You Want </h1>

                    <Form  onSubmit={this.renderCity}  >
                <Form.Group className="city-finder" controlId="cityName">
                  <Form.Label>Choose the city you want to Veiw the map for</Form.Label>
                  <Form.Control defaultValue='' type="text" placeholder="Enter The City Name" /> 
                </Form.Group>

                <Button variant="primary" type="submit">
                  Explore
                </Button>
              </Form>
                { this.state.display && !(this.state.errorMessege) &&
                 <div> 
                  <ListGroup> 
                  <ListGroup.Item>{this.state.locationData.display_name}</ListGroup.Item>
                  <ListGroup.Item>{this.state.locationData.lon}</ListGroup.Item>
                  <ListGroup.Item>{this.state.locationData.lat}</ListGroup.Item>
                  
                    </ListGroup>
                     
                    <Image src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_KEY}&center=${this.state.locationData.lat},${this.state.locationData.lon}`} alt='map' fluid />
                    </div>}
                
                 { this.state.errorMessege && <Alert variant="danger">
                  <Alert.Heading>Oh snap! You got an error! Status Code :400</Alert.Heading>
                  <p>
                  Make sure you have entered a city Name or Change the Name of the City you have entered and try again.
                  </p>
                  <p>
                  {this.state.error}
                  </p>
                </Alert>}
                { this.state.display && !(this.state.errorMessege) && <Weather forcastData={this.state.forcastData} latData={this.state.locationData.lat} lonData={this.state.locationData.lon}/>}
                {/* <Button variant="primary" type="submit" onClick={this.displayingWeather}>
                 Explore Weather Forcast 
                </Button> */}
               { this.state.display && !(this.state.errorMessege) && <Movies moviesData={this.state.moviesData}/>}
     </div>

    )
  }
}

export default App;