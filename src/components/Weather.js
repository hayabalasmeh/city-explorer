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
            
            error:'',
            
        }
    }
    
    
    render() {
        return (
            <div>
               
                

                { this.props.forcastData.map(item=>{
                    return (  <Card className='card'style={{ width: '18rem' }}>
                  <ListGroup variant="flush">
                      <ListGroup.Item>Date is :{item.date}</ListGroup.Item>
                   <ListGroup.Item>Forcast is :{item.description}</ListGroup.Item>
                      
              </ListGroup>
                 </Card>
                 )

                })}
           
                 
              
                    
            </div>
        )
    }
}

export default Weather
