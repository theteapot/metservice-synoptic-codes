const { getPrecipitation, getStation } = require('../src')

describe('Testing metservice codes', () => {
  it('Should get precipitation from code', () => {
    console.log(
      getPrecipitation({
        code:
          '93023 16/// /1510 10210 20112 40128 52012 69944 333 20127 70004=',
        format: 'FM_12'
      })
    )
  })
  it('Should get station info from code', () => {
    console.log(
      getStation({
        code:
          '93023 16/// /1510 10210 20112 40128 52012 69944 333 20127 70004=',
        format: 'FM_12'
      })
    )
  })
})
