const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZmFiaW9wb3p6aSIsImEiOiJjazd0N3drdWswa3F0M25wY2EyZ2NkcnN0In0.zA-_HSmW1CYEnKMsY8ioQw&language=it&limit=1'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            const data = {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            }
            callback(undefined, data)
        }
    })
}

module.exports = geocode