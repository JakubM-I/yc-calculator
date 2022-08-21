
// let kursEuro = document.querySelector(".kursy__euro").innerText;
// let kursDolar = document.querySelector(".kursy__dolar").innerText;
// let kursFrank = document.querySelector(".kursy__frank").innerText;



// let buttonReset = document.querySelector(".buttonReset");
// let wybranaWalutaKurs = document.querySelector(".wybrana_waluta--kurs");



// let pole3 = Number(kursEuro);
// let pole4 = +kursEuro;

// Sprawdzenie zawartości pola input przez wartośc value

// convertedAmount.value
// let wybranaWaluta = document.querySelector(".wybrana_waluta");
let exchangeForm = document.querySelector(".js-form");


let kurs_eur = 4.7480;
let kurs_dol = 4.7061;
let kurs_chf = 4.9159;
let convertedAmount = document.querySelector(".js-convertedAmount");
let euroCurrency = document.querySelector(".js-euro");
let dolarCurrency = document.querySelector(".js-dolar");
let frankCurrency = document.querySelector(".js-frank");
let formResult = document.querySelector(".js-summaryResult");
let selectedCurrency = document.querySelector(".js-selectedCurrency");
let selectedCurrencyPrice = document.querySelector(".js-selectedCurrencyPrice");
let selectedCurrencyRate = document.querySelector(".js-selectedCurrencyRate");

// wybranaWalutaKurs.innerText = (1 / kurs_eur).toFixed(3);
selectedCurrencyPrice.innerText = (1 / kurs_eur).toFixed(3);
selectedCurrency.innerText = "EUR";
selectedCurrencyRate.innerText = kurs_eur;
// formularz.addEventListener("input", () =>{
//     if (euro.checked === true){
//         pole2.value = kursEuro;
//         }
//         else if (dolar.checked === true){
//             pole2.value = kursDolar;
//         } else if (frank.checked === true){
//             pole2.value = kursFrank;
//         }


//     let przeliczenie = +pole.value * +pole2.value;

//    wynik.innerText = przeliczenie;
// })

// let listakursy = document.querySelector(".lista-kursy").value;
// let listawybranawakuta = document.querySelector(".lista-kursy-wybrana");

// switch (listakursy){
// case "euro":
//     listawybranawakuta.innerText="Euro";
// brake;
// case "dolar":
//     listawybranawakuta.innerText = "Dolar";
//     brake;
// case "frank":
//     listawybranawakuta.innerText = "Frank";
//     break;
// }
let currencyConverter;
exchangeForm.addEventListener("input", () => {
    

    if (euroCurrency.checked === true) {
        // pole2.value = kursEuro;  //zdefinować zmienną z kursem waluty
        // wybranaWaluta.innerText = "EUR";
        selectedCurrency.innerText = "EUR";
        selectedCurrencyPrice.innerText = (1 / kurs_eur).toFixed(3);
        selectedCurrencyRate.innerText = kurs_eur; 
        currencyConverter = "eur";
    }
    else if (dolarCurrency.checked === true) {
        // pole2.value = kursDolar; //zdefinować zmienną z kursem waluty
        // wybranaWaluta.innerText = "DOL";
        selectedCurrency.innerText = "DOL";
        selectedCurrencyPrice.innerText = (1 / kurs_dol).toFixed(3);
        selectedCurrencyRate.innerText = kurs_dol; 
        currencyConverter = "dol";
    } else if (frankCurrency.checked === true) {
        // pole2.value = kursFrank; //zdefinować zmienną z kursem waluty
        // wybranaWaluta.innerText = "CHF";
        selectedCurrency.innerText = "CHF";
        selectedCurrencyPrice.innerText = (1 / kurs_chf).toFixed(3);
        selectedCurrencyRate.innerText = kurs_chf;
        currencyConverter = "chf";
    }
})

// formularz.addEventListener("input", () =>{
//     if (euro.checked === true){
//         pole2.value = kursEuro;
//         wybranaWaluta.innerText = "euro";
//         }
//         else if (dolar.checked === true){
//             pole2.value = kursDolar;
//             wybranaWaluta.innerText = "dolar";
//         } else if (frank.checked === true){
//             pole2.value = kursFrank;
//             wybranaWaluta.innerText = "frank";
//         }


// let listakursy = document.querySelector(".lista-kursy").value;
// let listawybranawakuta = document.querySelector(".lista-kursy-wybrana");

// switch (listakursy){
// case "euro":
//     listawybranawakuta.innerText="Euro";
// brake;
// case "dolar":
//     listawybranawakuta.innerText = "Dolar";
//     brake;
// case "frank":
//     listawybranawakuta.innerText = "Frank";
//     break;
// }
// })

exchangeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let przeliczenie

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



    // let przeliczenie = +pole.value * +pole2.value;

    formResult.innerText = `${convertedAmount.value}PLN = ${przeliczenie.toFixed(2)} ${selectedCurrency.innerText}`;
})

//  buttonReset.addEventListener("click", () => {
//      wynik.innerText = "";
//  })