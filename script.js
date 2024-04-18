const valueAmount = document.getElementById('amount');
const sourceCountry = document.getElementById('sourceValue');
const destinationCountry = document.getElementById('destinationValue');
const form = document.getElementById(`form`);
const resultText = document.getElementById(`resultText`);

form.addEventListener('submit', function (e) {
    e.preventDefault();
    fetch('https://v6.exchangerate-api.com/v6/3918b56fe9e5fc5d918390bc/latest/' + sourceCountry.value)
        .then(respone => respone.json())
        .then(data => {
            if (data.result == "success") {
                let rates = data.conversion_rates;
                let valueConverted = parseFloat(valueAmount.value) * parseFloat(rates[destinationCountry.value]);
                console.log(valueConverted);
                resultText.append(valueConverted + " " + sourceCountry.value);
            } else {
                console.log("Fetching Failed! Check API Dashboard.");
            };
        })
})
