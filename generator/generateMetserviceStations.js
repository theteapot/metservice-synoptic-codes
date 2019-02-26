let { StationNumbers } = require('../src/metserviceStations')
const fetch = require('node-fetch')
const fs = require('fs-extra')

// Just reverse geocodes stations to get lat/lng
async function reverseGeocode () {
  let newStationNumbers = {}
  StationNumbers = await Promise.all(
    Object.keys(StationNumbers).map(async stationNumber => {
      let { name } = StationNumbers[stationNumber]
      let matches = await (await fetch(
        ` https://nominatim.openstreetmap.org/search?format=json&q=${name}`
      )).json()
      let { lat = 0, lon = 0 } = matches[0] || {}
      newStationNumbers[stationNumber] = { name, lat, lng: lon }
    })
  )

  await fs.writeFile(
    'metserviceStations.json',
    JSON.stringify(newStationNumbers)
  )
}

reverseGeocode()
