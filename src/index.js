function getPrecipitation ({ code = '' }) {
  if (!code || code === '') {
    throw new Error('Expected non empty string to be passed')
  }
  let rainSection = code.match(/[ ]6[\d]{4}[ ]/g)
  if (!rainSection) return

  let results = rainSection.map(rain => {
    rain = rain.trim()
    let RRR = Number(rain.slice(1, 4))
    let tR = Number(rain[4])

    // Getting precipitation data
    let amountOfPrecipitation
    if (RRR < 990) {
      amountOfPrecipitation = RRR
    } else if (RRR === 990) {
      amountOfPrecipitation = 0
    } else {
      amountOfPrecipitation = (RRR - 990) / 10
    }

    // Getting time data
    let hoursPrecedingObservation
    switch (tR) {
      case 1:
        hoursPrecedingObservation = 6
        break
      case 2:
        hoursPrecedingObservation = 12
        break
      case 3:
        hoursPrecedingObservation = 18
        break
      case 4:
        hoursPrecedingObservation = 24
        break
      case 5:
        hoursPrecedingObservation = 1
        break
      case 6:
        hoursPrecedingObservation = 2
        break
      case 7:
        hoursPrecedingObservation = 3
        break
      case 8:
        hoursPrecedingObservation = 9
        break
      case 9:
        hoursPrecedingObservation = 15
        break
      default:
        hoursPrecedingObservation = 3
    }

    return { hoursPrecedingObservation, amountOfPrecipitation }
  })

  return results
}

module.exports = { getPrecipitation }
