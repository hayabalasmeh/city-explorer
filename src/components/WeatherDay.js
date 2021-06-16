import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export class WeatherDay extends Component {

    constructor(props){
        super(props);
        this.state={
            
            
            
        }
    }
    
    
    render() {
        return (
            <div>
               
                

                 <Card className='card'style={{ width: '18rem' }}>
                  <ListGroup variant="flush">
                      <ListGroup.Item>Date is :{this.props.date}</ListGroup.Item>
                   <ListGroup.Item>Forcast is :{this.props.description}</ListGroup.Item>
                      
              </ListGroup>
                 </Card>
                 
               
           
                 
              
                    
            </div>
        )
    }
}

export default WeatherDay
