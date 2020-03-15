const request = require('request')

const url = 'https://api.darksky.net/forecast/af375ff38c946c66aec4e47aa88fe561/45.4501,8.6167?units=si&lang=it'

request({ url: url, json: true }, (error, response) => {
    const temp = response.body.currently.temperature
    const rain_chance = response.body.currently.precipProbability
    console.log(response.body.daily.data[0].summary)
    console.log(`Al momento ci sono ${temp}°C fuori. Le probabilità di pioggia sono ${rain_chance}%.`)
})

// Geocoding:
// get lat/lon from city name/address
const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZmFiaW9wb3p6aSIsImEiOiJjazd0N3drdWswa3F0M25wY2EyZ2NkcnN0In0.zA-_HSmW1CYEnKMsY8ioQw&language=it&limit=1'

request({ url: geocodeURL, json: true }, (error, response) => {
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log('Latitude: ' + latitude)
    console.log('Longitude: ' + longitude)
})