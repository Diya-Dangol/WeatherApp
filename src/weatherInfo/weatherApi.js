import axios from 'axios';
import {CONFIG} from './config';
export default class WeatherAPI {


    static  getCurrentWeatherData =  async (cityName)=>{
         let url= CONFIG.base.replace('~',cityName);
        return await axios.get(url+CONFIG.KEY);
    }


}