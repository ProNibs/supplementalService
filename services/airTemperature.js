const min = 70 
const max = 95 

const getAirTemperature = () => {
  const airTemperature = max + (Math.random() * (min - max)) // generate random air temp 
  return Number.parseFloat(Number.parseFloat(airTemperature).toPrecision(4))
}

const airTemperature = () => {
  return getAirTemperature()
}

module.exports = airTemperature