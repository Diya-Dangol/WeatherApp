import React, {Component} from 'react';
import Box from "@material-ui/core/Box/Box";
import Grid from "@material-ui/core/Grid/Grid";

class CurrentWeatherBox extends Component {
    render() {
        let weather=this.props.data;
        return (
               <Box style={{margin: '100px 80px 0px 40px' }}>
                   <div style={{justifyContent: "center", marginRight:"700px"}}>
                       
                   <div style={{color:"#eb6e4b",fontSize:16}}>
                       {new Date().toDateString()}
                   </div>
                   <div style={{fontSize:20,fontWeight:900}}>
                       {weather.name},{weather.sys.country}
                   </div>
                   <div>
                       SunRise : {new Date(weather.sys.sunrise).toLocaleString()}
                   </div>
                   <div>
                       SunSet : {new Date(weather.sys.sunset).toLocaleString()}
                   </div>
                   </div>

                   <Grid container  spacing={1} style={{margin:"100px 10px 30px 20px" }}>
                       <Grid item xs="6" sm="4" style={{margin:10}}>
                           <div>Temperature</div>
                           <div>{weather.main.temp}</div>
                       </Grid>
                       <Grid item xs="6" sm="4" style={{margin:10}}>
                           <div>Min Temperature</div>
                           <div>{weather.main.temp_min}</div>
                       </Grid>
                       <Grid  item xs="6" sm="4" style={{margin:10}}>
                           <div>MAx Temperature</div>
                           <div>{weather.main.temp_max}</div>
                       </Grid>
                       <Grid  item xs="6" sm="4" style={{margin:10}}>
                           <div>Pressure</div>
                           <div>{weather.main.pressure}</div>
                       </Grid>
                       <Grid  item xs="6" sm="4" style={{margin:10}}>
                           <div>Humidity</div>
                           <div>{weather.main.humidity}</div>
                       </Grid>
                   </Grid>
               </Box>
        );
    }
}

export default CurrentWeatherBox;
