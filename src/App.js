import React, { Component } from 'react'
import './App.css'
import WeatherHome from './weatherInfo/weatherHome';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import theme from './theme'
import {ThemeProvider} from '@material-ui/core/styles';


class App extends Component {
  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Router>
            <Route>
              <WeatherHome />  
            </Route>               
          </Router>
        </ThemeProvider>
      </div>
    )
  }
}

export default App

