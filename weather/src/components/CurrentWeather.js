import React from "react";
import {connect} from "react-redux";
import {currentWeatherAPI} from "../apis/weatherAPI";

class CurrentWeather extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            main: {},
            lon: 0,
            lat: 0,
            city: '',
            country: '',
            localTime: '',
            weatherList: [],
            wind: {},
            visibility: ''
        }
    }

    getZoneTime(offset) {
        var offset_GMT = new Date().getTimezoneOffset();
        var nowDate = new Date().getTime();
        var targetDate = new Date(nowDate + offset_GMT * 60 * 1000 + offset *  1000);
        return targetDate.toString()
    }

    renderDescription() {
        return this.state.weatherList.map(weather => {
            return (
                <span key={weather.id}>{weather.description}</span>
            )
        })
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) => {
            // console.log(position)
            currentWeatherAPI({
                method: 'get',
                params: {
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                }
            }).then(
                res=>{
                    // console.log(res.data);
                    this.setState({
                        main: res.data.main,
                        lat: position.coords.latitude,
                        lon: position.coords.longitude,
                        city: res.data.name,
                        country: res.data.sys.country,
                        localTime: this.getZoneTime(res.data.timezone),
                        weatherList: res.data.weather,
                        wind: res.data.wind,
                        visibility: res.data.visibility
                    })
                    // console.log(this.state)
                }
            );
        });
    }

    componentWillReceiveProps(nextProps) {
        // console.log(nextProps)
        currentWeatherAPI({
            method: 'get',
            params: {
                lat: nextProps.latitude,
                lon: nextProps.longitude
            }
        }).then(
            res=>{
                // console.log(res);
                this.setState({
                    main: res.data.main,
                    lat: res.data.coord.lat,
                    lon: res.data.coord.lon,
                    city: res.data.name,
                    country: res.data.sys.country,
                    localTime: this.getZoneTime(res.data.timezone),
                    weatherList: res.data.weather,
                    wind: res.data.wind,
                    visibility: res.data.visibility
                })
                // console.log(this.state)
            }
        );
    }

    render() {
        return (
            <div className='panel'>
                <div className='panel-title'>
                    <span>{this.state.localTime}</span>
                    <h2>{this.state.city}, {this.state.country}</h2>
                </div>
                <div className='panel-body'>
                    <div className='current-temp'>
                        <svg></svg>
                        <span>{ this.state.main.temp }°C</span>
                    </div>
                    <span className='weather-desc'>Feels like {this.state.main.feels_like}. {this.renderDescription()}</span>
                    <ul className='weather-items'>
                        <li>
                            <div className='wind-line'>
                                <i className={`wi wi-wind towards-${this.state.wind.deg}-deg`} />
                                wind: {this.state.wind.speed} m/s
                            </div>
                        </li>
                        <li>
                            <div className='pressure'>
                                <i className='wi wi-barometer' />
                                pressure: {this.state.main.pressure} hPa
                            </div>
                        </li>
                        <li>
                            <div className='humidity'>
                                <i className='wi wi-humidity' />
                                humidity: {this.state.main.humidity} %
                            </div>
                        </li>
                        <li>
                            <div className='dew-point'>

                            </div>
                        </li>
                        <li>
                            <div className='visibility'>
                                <i className='wi wi-windy' />
                                visibility: {(this.state.visibility/1000).toFixed(1)} km
                            </div>
                        </li>
                    </ul>
                    lon: {this.state.lon.toFixed(2)}
                    lat: {this.state.lat.toFixed(2)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        longitude: state.location.lon,
        latitude: state.location.lat,
        city: state.location.city,
        country: state.location.country
    };
};

export default connect(
    mapStateToProps
)(CurrentWeather);