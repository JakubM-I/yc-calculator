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
        selectedCurrency.innerText = "EUR";
        selectedCurrencyPrice.innerText = (1 / kurs_eur).toFixed(3);
        selectedCurrencyRate.innerText = kurs_eur; 
        currencyConverter = "eur";
    }
    else if (dolarCurrency.checked === true) {
        selectedCurrency.innerText = "DOL";
        selectedCurrencyPrice.innerText = (1 / kurs_dol).toFixed(3);
        selectedCurrencyRate.innerText = kurs_dol; 
        currencyConverter = "dol";
    } else if (frankCurrency.checked === true) {
        selectedCurrency.innerText = "CHF";
        selectedCurrencyPrice.innerText = (1 / kurs_chf).toFixed(3);
        selectedCurrencyRate.innerText = kurs_chf;
        currencyConverter = "chf";
    }
})

exchangeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let przeliczenie = +convertedAmount.value * (1 / kurs_eur);

    switch(currencyConverter){
        case "eur":
        przeliczenie = +convertedAmount.value * (1 / kurs_eur);
        break;

        case "dol":
        przeliczenie = +convertedAmount.value * (1 / kurs_dol);
        break;

        case "chf":
        przeliczenie = +convertedAmount.value * (1 / kurs_chf);
        break;
    }

    formSummaryConvertedAmount.innerText = `${convertedAmount.value} PLN = `;
    formResult.innerText = `${przeliczenie.toFixed(2)} ${selectedCurrency.innerText}`;
})