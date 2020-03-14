const request = require('request')

const url = 'https://api.darksky.net/forecast/af375ff38c946c66aec4e47aa88fe561/45.4501,8.6167'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)
})