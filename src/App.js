


import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      displayMap:'false',
      locationData:'',


    }
  }
  renderCity = async (event) =>{
    event.preventDefault();
    let cityChoosed= event.target.cityName.value;
    console.log(cityChoosed);
    let cityUrl = `https://us1.locationiq.com/v1/search.php?key=pk.8694532b1962aa7901ba7712fd7818b9&q=${cityChoosed}&format=json`; //result will be data in json file
    let locationResult = await axios.get(cityUrl);
    console.log(locationResult.data);
    this.setState({
      locationData: locationResult.data[0],
    })
  }
  render(){
    return (
     <div>
       <h1>Explore the Map of Any City You Want </h1>

       <Form  onSubmit={this.renderCity}>
  <Form.Group className="city-finder" controlId="cityName">
    <Form.Label>Choose the city you want to Veiw the map for</Form.Label>
    <Form.Control type="text" placeholder="Enter The City Name" /> 
  </Form.Group>

  <Button variant="primary" type="submit">
    Explore
  </Button>
</Form>
<h3>{this.state.locationData.display_name}</h3>
<h4>{this.state.locationData.lon}</h4>
<h4>{this.state.locationData.lat}</h4>

     </div>

    )
  }
}

export default App;