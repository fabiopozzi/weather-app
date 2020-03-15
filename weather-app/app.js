const request = require('request')

const url = 'https://api.darksky.net/forecast/af375ff38c946c66aec4e47aa88fe561/45.4501,8.6167?units=si&lang=it'

request({ url: url, json: true }, (error, response) => {
    const temp = response.body.currently.temperature
    const rain_chance = response.body.currently.precipProbability
    console.log(response.body.daily.data[0].summary)
    console.log(`Al momento ci sono ${temp}°C fuori. Le probabilità di pioggia sono ${rain_chance}%.`)
})