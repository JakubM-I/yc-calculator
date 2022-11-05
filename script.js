{
    const currencySelection = () => {
        const euroCurrency = document.querySelector(".js-euro");
        const dolarCurrency = document.querySelector(".js-dolar");
        const frankCurrency = document.querySelector(".js-frank");

        if (euroCurrency.checked === true) {
            return "eur";
        }

        if (dolarCurrency.checked === true) {
            return "dol";
        }
        if (frankCurrency.checked === true) {
            return "chf";
        };
    };

    const currencyRateSelect = (selectCurrency) => {
        const kurs_eur = 4.7480;
        const kurs_dol = 4.7061;
        const kurs_chf = 4.9159;

        switch (selectCurrency) {
            case "eur":
                return kurs_eur;

            case "dol":
                return kurs_dol;

            case "chf":
                return kurs_chf;
        }
    };

    const currencyCalculate = (selectCurrency, convertedAmount, selectCurrencyRate) => {

        switch (selectCurrency) {
            case "eur":
                return +convertedAmount.value * (1 / selectCurrencyRate);

            case "dol":
                return +convertedAmount.value * (1 / selectCurrencyRate);

            case "chf":
                return +convertedAmount.value * (1 / selectCurrencyRate);
        }
    };

    const currencyCalculateInfo = (selectCurrency, selectCurrencyRate) => {
        const selectedCurrency = document.querySelector(".js-selectedCurrency");
        const selectedCurrencyPrice = document.querySelector(".js-selectedCurrencyPrice");
        const selectedCurrencyRate = document.querySelector(".js-selectedCurrencyRate");

        selectedCurrency.innerText = selectCurrency;
        selectedCurrencyPrice.innerText = (1 / selectCurrencyRate).toFixed(3);
        selectedCurrencyRate.innerText = selectCurrencyRate.toFixed(3);
    };

    const summaryCalculatedInfo = (formSummaryConvertedAmount, convertedAmount, formSummaryResult, calculatedCurrency, selectCurrency) => {
        formSummaryConvertedAmount.innerText = `${convertedAmount.value} PLN = `;
        formSummaryResult.innerText = `${calculatedCurrency.toFixed(2)} ${selectCurrency}`;
    };

    const exchangeCalculateResult = (exchangeForm, convertedAmount, formSummaryConvertedAmount, formSummaryResult) => {
        exchangeForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const selectCurrency = currencySelection();
            const selectCurrencyRate = currencyRateSelect(selectCurrency);
            const calculatedCurrency = currencyCalculate(selectCurrency, convertedAmount, selectCurrencyRate);

            currencyCalculateInfo(selectCurrency, selectCurrencyRate);
            summaryCalculatedInfo(formSummaryConvertedAmount, convertedAmount, formSummaryResult, calculatedCurrency, selectCurrency);
        })
    };

    const defaultFormValue = () => {
        const selectCurrency = currencySelection();
        const selectCurrencyRate = currencyRateSelect(selectCurrency);

        currencyCalculateInfo(selectCurrency, selectCurrencyRate);
    };

    const formFieldRestore = (formSummaryConvertedAmount, formSummaryResult, convertedAmount) => {
        const euroCurrency = document.querySelector(".js-euro");

        formSummaryConvertedAmount.innerText = "";
        formSummaryResult.innerText = "";
        convertedAmount.value = 1;
        euroCurrency.checked = true;
    };

    const calculatorFormReset = (exchangeForm, formSummaryConvertedAmount, formSummaryResult, convertedAmount) => {
        exchangeForm.addEventListener("reset", () => {
            formFieldRestore(formSummaryConvertedAmount, formSummaryResult, convertedAmount);
            defaultFormValue();
        });
    };

    const init = () => {
        defaultFormValue();
        const exchangeForm = document.querySelector(".js-form");
        const convertedAmount = document.querySelector(".js-convertedAmount");

        const formSummaryResult = document.querySelector(".js-summaryResult");
        const formSummaryConvertedAmount = document.querySelector(".js-summaryConvertedAmount");
        exchangeCalculateResult(exchangeForm, convertedAmount, formSummaryConvertedAmount, formSummaryResult);
        calculatorFormReset(exchangeForm, formSummaryConvertedAmount, formSummaryResult, convertedAmount);
    };
    init();
};