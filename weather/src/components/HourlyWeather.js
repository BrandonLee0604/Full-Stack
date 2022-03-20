import React from "react";
import {connect} from "react-redux";
import {forecastWeatherAPI} from "../apis/weatherAPI";
import HourlyChart from "./HourlyChart";

class HourlyWeather extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            xdata: {},
            ydata: {},
            data: {}
        }
    }

    getZoneTime(offset) {
        var offset_GMT = new Date().getTimezoneOffset();
        var nowDate = new Date().getTime();
        var targetDate = new Date(nowDate + offset_GMT * 60 * 1000 + offset *  1000);
        return targetDate.toString()
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position)
            forecastWeatherAPI({
                method: 'get',
                params: {
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                }
            }).then(
                res=>{
                    console.log(res);
                    const data = res.data.hourly
                    
                    this.setState({

                    })
                    console.log(this.state)
                }
            );
        });
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        forecastWeatherAPI({
            method: 'get',
            params: {
                lat: nextProps.latitude,
                lon: nextProps.longitude
            }
        }).then(
            res=>{
                console.log(res);
                this.setState({

                })
                console.log(this.state)
            }
        );
    }

    render() {
        return (
            <div className='panel'>
                <div className='panel-title'>
                    <h3>Hourly forecast</h3>
                </div>
                <div className='panel-body'>
                    <HourlyChart />
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
)(HourlyWeather);