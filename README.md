# Provided functions

- `getStation({code})`

  - Returns `{lat, lng, name}` of station parsed from the full WMO synoptic code (currently only recognises NZ ones)

- `getPrecipitation({code})`
  - Returns `{ hoursPrecedingObservation, amountOfPrecipitation }` parsed out of the full WMO synoptic code (currently on supports FM 12 format)
