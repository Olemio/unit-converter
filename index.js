const length = 3.281
const volume = 0.264
const mass = 2.204

const lengthEl = document.getElementById("length-el") 
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const convertBtn = document.getElementById("convert-btn")

document.getElementById("amount-input").value = 1

conversion(1, length)
conversion(1, volume)
conversion(1, mass)

convertBtn.addEventListener("click", function() {
    unitAmount = document.getElementById("amount-input").value

    conversion(unitAmount, length)
    conversion(unitAmount, volume)
    conversion(unitAmount, mass)
})

function conversion(userInput, unit) {
    const metricToImperial = (userInput * unit).toFixed(3)
    const imperialToMetric = (userInput / unit).toFixed(3)

    if (unit === length) {
        return lengthEl.textContent = `${userInput} meters = ${metricToImperial} feet | ${userInput} feet = ${imperialToMetric} meters`
    } else if ( unit === volume ) {
        return volumeEl.textContent = `${userInput} liters = ${metricToImperial} gallons | ${userInput} gallons = ${imperialToMetric} liters`
    } else if ( unit === mass) {
        return massEl.textContent = `${userInput} kilos = ${metricToImperial} pounds | ${userInput} pounds = ${imperialToMetric} kilos`
    }
}