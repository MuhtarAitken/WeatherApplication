import React from "react";


const Weather = (props) =>
     <div className="infoWeath">
            {props.city &&
            <div>
                <p>Местоположение:</p>{props.city}, {props.country}
                <p>Температура: {props.temp}</p>
                <p>Восход солнца: {props.sunrise}</p>
                <p>заход солнца: {props.sunset}</p>
            </div>
            }
            <p className="error">{props.error}</p>
        </div>

    export default Weather;