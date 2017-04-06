import React, { PropTypes } from 'react';
import Loading from './Loading';
import * as styles from '../styles/styles';

function Temperature({ temperature }) {
  return (
    <div>
      <dt><i className="wi wi-thermometer"></i> Temperatue</dt>
      <dd>
        {temperature.length === 1 ?
         `${temperature} \u{2109}` :
         `Low: ${temperature[0]}  \u{2109} / High: ${temperature[1]}  \u{2109}`}
      </dd>
    </div>
  );
}

Temperature.propTypes = {
  temperature: PropTypes.array.isRequired,
};

function Pressure({ pressure }) {
  return (
    <div>
      <dt> <i className="wi wi-barometer"></i> Pressure</dt>
      <dd>{pressure} mb</dd>
    </div>
  );
}

Pressure.propTypes = {
  pressure: PropTypes.number.isRequired,
};

function Humidity({ humidity }) {
  return (
    <div>
      <dt><i className="wi wi-humidity"></i> Humidity</dt>
      <dd>{humidity}%</dd>
    </div>
  );
}

Humidity.propTypes = {
  humidity: PropTypes.number.isRequired,
};

function SunriseTime({ time }) {
  if (time) {
    return (
      <div>
        <dt><i className="wi wi-sunriseTime"></i> Sunrise Time</dt>
        <dd>{time}</dd>
      </div>
    );
  }
  return null;
}

SunriseTime.propTypes = {
  time: PropTypes.string,
};

function SunsetTime({ time }) {
  if (time) {
    return (
      <div>
        <dt><i className="wi wi-sunsetTime"></i> Sunset Time</dt>
        <dd>{time}</dd>
      </div>
    );
  }
  return null;
}

SunsetTime.propTypes = {
  time: PropTypes.string,
};

function Detail({ isLoading, title, handleClose, iconClass, day }) {
  if (isLoading === true) {
    return (
      <Loading />
    );
  }

  return (
    <div>
      <div className="row">
        <div className="col-xs-4 col-xs-offset-4 text-center">
          <h2>{title}</h2>
        </div>
        <div className="col-xs-1">
          <button type="button" className="close" onClick={handleClose} aria-label="Close">
            <span style={styles.currentIcon} aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-sm-4 col-sm-offset-4 text-center" style={styles.currentIcon}>
          <i className={iconClass}></i>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-sm-4 col-sm-offset-4 text-center lead text-capitalize">
          {day.weatherDescription}
        </div>
      </div>
      <div style={styles.hcenter}>
        <dl className="dl-horizontal">
          <Temperature temperature={day.temperature} />
          <Pressure pressure={day.pressure} />
          <Humidity humidity={day.humidity} />
          {day.sunriseTime ? <SunriseTime time={day.sunriseTime || 0} /> : null}
          {day.sunsetTime ? <SunsetTime time={day.sunsetTime || 0} /> : null}
        </dl>
      </div>
    </div>
  );
}

Detail.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  iconClass: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  day: PropTypes.object.isRequired,
};

export default Detail;
