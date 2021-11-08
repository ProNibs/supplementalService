const min = 5 
const max = 15 

const getWindSpeed = () => {
  const windSpeed = max + (Math.random() * (min - max)) // generate random air temp 
  return Number.parseFloat(Number.parseFloat(windSpeed).toPrecision(4))
}

const windSpeed = () => {
  return getWindSpeed()
}

module.exports = windSpeed 