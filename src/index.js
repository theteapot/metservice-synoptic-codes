module.exports = parseCode

function parseCode ({ code, format }) {
  if (!code || !format) throw new Error('Must pass both code and format')

  let result = {}

  let [
    section0,
    section1,
    section2,
    section3,
    section4,
    section5,
    section6,
    section7
  ] = code.split(' ')

  if (section0) result.stationNumber = section0

  if (section1 && format === 'FM_12') {
  }
}
