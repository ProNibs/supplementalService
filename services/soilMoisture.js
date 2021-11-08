const min = 30 
const max = 60 

const getSoilMoisture = () => {
  const soilMoisture = max + (Math.random() * (min - max)) // generate random air temp 
  return Number.parseFloat(Number.parseFloat(soilMoisture).toPrecision(4))
}

const soilMoisture = () => {
  return getSoilMoisture()
}

module.exports = soilMoisture 