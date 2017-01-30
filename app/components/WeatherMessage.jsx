var React = require('react');

var WeatherMessage = ({location, temp}) => {
    return (
        <h3>It is currently {temp} degrees in {location}</h3>
    )    
};

module.exports = WeatherMessage;