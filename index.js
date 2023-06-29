const length = 3.281
const volume = 0.264
const mass = 2.204

let lengthEl = document.getElementById("length-el") 
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

let convertBtn = document.getElementById("convert-btn")


lengthConversion(1)
volumeConversion(1)
massConversion(1)

convertBtn.addEventListener("click", function() {
    let chosenAmountInpt = document.getElementById("chosen-amount-inpt").value
    lengthConversion(chosenAmountInpt)
    volumeConversion(chosenAmountInpt)
    massConversion(chosenAmountInpt)
})



function lengthConversion(i) {
    const metricToImperial = (i * length).toFixed(3)
    const imperialToMetric = (i / length).toFixed(3)
    
    return lengthEl.textContent = `${i} meters = ${metricToImperial} feet | ${i} feet = ${imperialToMetric} meters`
}

function volumeConversion(i) {
    const metricToImperial = (i * volume).toFixed(3)
    const imperialToMetric = (i / volume).toFixed(3)
    
    return volumeEl.textContent = `${i} liters = ${metricToImperial} gallons | ${i} gallons = ${imperialToMetric} liters`
}

function massConversion(i) {
    const metricToImperial = (i * mass).toFixed(3)
    const imperialToMetric = (i / mass).toFixed(3)
    
    return massEl.textContent = `${i} kilos = ${metricToImperial} pounds | ${i} pounds = ${imperialToMetric} kilos`
}