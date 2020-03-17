const request = require('request')

const forecast = (lon, lat, callback) => {
    const url = 'https://api.darksky.net/forecast/af375ff38c946c66aec4e47aa88fe561/' + lat + ',' + lon + '?units=si&lang=it'
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('unable to find location.', undefined)
        } else {
            const temp = response.body.currently.temperature
            const rain_chance = response.body.currently.precipProbability
            callback(undefined, `Al momento ci sono ${temp}°C fuori. Le probabilità di pioggia sono ${rain_chance}%.`)
        }
    })
}

module.exports = forecast