document.getElementById('calculateBtn').addEventListener('click', calculateCarbonFootprint);

function calculateCarbonFootprint() {
    // Get input values
    const electricity = parseFloat(document.getElementById('electricity').value) || 0;
    const gas = parseFloat(document.getElementById('gas').value) || 0;
    const car = parseFloat(document.getElementById('car').value) || 0;
    const flights = parseFloat(document.getElementById('flights').value) || 0;

    // Define emission factors (in kg CO2)
    const electricityFactor = 0.527;  // kg CO2 per kWh
    const gasFactor = 5.3;  // kg CO2 per therm
    const carFactor = 0.411;  // kg CO2 per mile
    const flightFactor = 250;  // kg CO2 per round trip flight

    // Calculate individual emissions
    const electricityEmissions = electricity * electricityFactor * 12; // yearly
    const gasEmissions = gas * gasFactor * 12; // yearly
    const carEmissions = car * carFactor * 52; // yearly
    const flightEmissions = flights * flightFactor; // yearly

    // Total emissions
    const totalEmissions = electricityEmissions + gasEmissions + carEmissions + flightEmissions;

    // Update result on the page
    document.getElementById('totalEmissions').textContent = totalEmissions.toFixed(2);
}
