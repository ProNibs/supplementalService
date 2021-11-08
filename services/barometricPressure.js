const min = 25
const max = 40

const getBarometricPressure = () => {
  const barometricPressure = max + (Math.random() * (min - max)) // generate random air temp 
  return Number.parseFloat(Number.parseFloat(barometricPressure).toPrecision(4)) 
}

const barometricPressure = () => {
  return getBarometricPressure()
}

module.exports = barometricPressure 