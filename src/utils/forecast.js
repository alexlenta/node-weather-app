const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/cfd40b1e7afbfb710bd5afadd3b2eabb/' + latitude + ',' + longitude + '?units=si'

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ` It is currently ${body.currently.temperature} degrees celsius out. The high today is ${body.daily.data[0].temperatureHigh} degrees with a low of ${body.daily.data[0].temperatureLow} degrees.`)
        }

    })
};

module.exports = forecast;
