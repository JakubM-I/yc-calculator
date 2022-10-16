let exchangeForm = document.querySelector(".js-form");

let kurs_eur = 4.7480;
let kurs_dol = 4.7061;
let kurs_chf = 4.9159;
let convertedAmount = document.querySelector(".js-convertedAmount");
let euroCurrency = document.querySelector(".js-euro");
let dolarCurrency = document.querySelector(".js-dolar");
let frankCurrency = document.querySelector(".js-frank");
let formResult = document.querySelector(".js-summaryResult");
let formSummaryConvertedAmount = document.querySelector(".js-summaryConvertedAmount");
let selectedCurrency = document.querySelector(".js-selectedCurrency");
let selectedCurrencyPrice = document.querySelector(".js-selectedCurrencyPrice");
let selectedCurrencyRate = document.querySelector(".js-selectedCurrencyRate");

selectedCurrencyPrice.innerText = (1 / kurs_eur).toFixed(3);
selectedCurrency.innerText = "EUR";
selectedCurrencyRate.innerText = kurs_eur;

let currencyConverter;
exchangeForm.addEventListener("input", () => {
    
    if (euroCurrency.checked === true) {
        currencyConverter = "eur";
    } else if (dolarCurrency.checked === true) {
        currencyConverter = "dol";
    } else if (frankCurrency.checked === true) {
        currencyConverter = "chf";
    }
})

exchangeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let currencyCount = +convertedAmount.value * (1 / kurs_eur);

    switch(currencyConverter){
        case "eur":
        currencyCount = +convertedAmount.value * (1 / kurs_eur);
        selectedCurrency.innerText = "EUR";
        selectedCurrencyPrice.innerText = (1 / kurs_eur).toFixed(3);
        selectedCurrencyRate.innerText = kurs_eur; 
        break;

        case "dol":
        currencyCount = +convertedAmount.value * (1 / kurs_dol);
        selectedCurrency.innerText = "DOL";
        selectedCurrencyPrice.innerText = (1 / kurs_dol).toFixed(3);
        selectedCurrencyRate.innerText = kurs_dol; 
        break;

        case "chf":
        currencyCount = +convertedAmount.value * (1 / kurs_chf);
        selectedCurrency.innerText = "CHF";
        selectedCurrencyPrice.innerText = (1 / kurs_chf).toFixed(3);
        selectedCurrencyRate.innerText = kurs_chf;
        break;
    }

    formSummaryConvertedAmount.innerText = `${convertedAmount.value} PLN = `;
    formResult.innerText = `${currencyCount.toFixed(2)} ${selectedCurrency.innerText}`;
})

exchangeForm.addEventListener("reset", (event) => {
    event.preventDefault();
    formSummaryConvertedAmount.innerText = "";
    formResult.innerText = "";
    convertedAmount.value = 1;
    euroCurrency.checked = true;
    selectedCurrency.innerText = "EUR";
})