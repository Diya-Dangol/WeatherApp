import React, { Component } from 'react'
import Header from "./header";
import WeatherAPI from './weatherApi';
import Form from './form'

import { CircularProgress } from '@material-ui/core';
import CurrentWeatherBox from "./currentWeatherBox";

class WeatherHome extends Component {  

    constructor(props){
        super(props);
        this.state={
            city:'Kathmandu',
            weatherData:{},
            isLoading: true            
        }
    }

    componentDidMount() {
        this.getSearch();
    }
    
    getSearch = () => {
        let {city} =this.state;        
        let self=this;
           WeatherAPI.getCurrentWeatherData(`${city}`)
           .then((res) => {
               console.log(res.data);
               self.setState({
                   weatherData: res.data,
                   isLoading: false
               })
           })
            .catch(error => console.log(error));
    }
    

    handleChange =(event) => {
        const {id, value} = event.target
        this.setState({
            [id]: value
        })
        console.log(value)
    }
      
    render() {
        return (
            <div className={(typeof this.state.weatherData.main != "undefined") ? ((this.state.weatherData.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
                <Header/>
                <Form 
                handleChange = {this.handleChange}
                submit={this.getSearch}
                />
                {
                    this.state.isLoading ? <CircularProgress/> :
                    (<div>
                        <CurrentWeatherBox  data={this.state.weatherData}/>
                     </div>)                
                } 
            
            </div>        
        )
    }
}

export default WeatherHome
