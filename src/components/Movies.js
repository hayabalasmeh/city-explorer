

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';
import { Movie } from './Movie';

export class Movies extends Component {

    constructor(props){
        super(props);
        this.state={
            
            error:'',
            
        }
    }
    
    
    render() {
        return (
            <div>
               
                

                { this.props.moviesData.map(item=>{
                    return (<Movie title={item.title} link={item.link} overview={item.overview} averageVotes={item.averageVotes} totalVotes={item.totalVotes} popularity={item.popularity} realeasedDate={item.realeasedDate}/> 
                   
                 )

                })}
           
                 
              
                    
            </div>
        )
    }
}

export default Movies;
