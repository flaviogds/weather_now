import { CityWeather, CityDailyWeather, CityList } from '../models/weather.model';

export function responseToCityWeather(response: any): CityWeather {
  return {
    city: {
      id: response.id,
      name: response.name,
      country: response.sys.country,
      coord: response.coord,
      timeZone: response.timezone,
    },
    weather: {
      id: response.weather[0].id,
      description: response.weather[0].description,
      icon: response.weather[0].icon,
      temp: response.main.temp,
      pressure: response.main.pressure,
      minTemp: response.main.temp_min,
      maxTemp: response.main.temp_max,
      feelsLike: response.main.feels_like,
      humidity: response.main.humidity,
      wind: {
        speed: response.wind.speed,
        deg: response.wind.deg,
      },
      sunrise: response.sys.sunrise,
      sunset: response.sys.sunset,
      dateTime: response.dt,
      rain: response.rain,
    },
  }
}

export function responseToGroupCityWeather(response: any): CityList {
  return {
    cnt: response.cnt,
    list: response.list.map(d => ({
      city: {
        id: d.id,
        name: d.name,
        country: d.sys.country,
        coord: d.coord,
        timeZone: d.timezone,
      },
      weather: {
        id: d.weather[0].id,
        description: d.weather[0].description,
        icon: d.weather[0].icon,
        temp: d.main.temp,
        pressure: d.main.pressure,
        minTemp: d.main.temp_min,
        maxTemp: d.main.temp_max,
        feelsLike: d.main.feels_like,
        humidity: d.main.humidity,
        wind: {
          speed: d.wind.speed,
          deg: d.wind.deg,
        },
        sunrise: d.sys.sunrise,
        sunset: d.sys.sunset,
        dateTime: d.dt,
        rain: d.rain,
      },
    })),
  }
}


export function responseToCityDailyWeather(response: any): CityDailyWeather {
  return {
    city: {
      id: undefined,
      name: undefined,
      country: undefined,
      coord: undefined,
      timeZone: response.timezone,
    },
    current: {
      id: response.current.weather[0].id,
      description: response.current.weather[0].description,
      icon: response.current.weather[0].icon,
      temp: response.current.temp,
      minTemp: response.current.minTemp,
      maxTemp: response.current.maxTemp,
      pressure: response.current.pressure,
      feelsLike: response.current.feels_like,
      humidity: response.current.humidity,
      wind: {
        speed: response.current.wind_speed,
        deg: response.current.wind_deg,
      },
      sunset: response.current.sunset,
      sunrise: response.current.sunrise,
      dateTime: response.current.dt,
      rain: response.current.rain,
    },
    daily: response.daily.map(d => ({
      date: d.dt,
      weather: {
        id: d.weather[0].id,
        description: d.weather[0].description,
        icon: d.weather[0].icon,
        temp: undefined,
        minTemp: d.temp.min,
        maxTemp: d.temp.max,
        humidity: d.humidity,
        pressure: d.pressure,
        wind: {
          speed: d.wind_speed,
          deg: d.wind_deg,
        },
        sunset: d.sunset,
        sunrise: d.sunrise,
      }
    })),
  }
}
