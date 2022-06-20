let pole = document.querySelector(".pole");
let pole2 = document.querySelector(".pole2");
let wybranaWaluta = document.querySelector(".wybrana_waluta");
let kursEuro = document.querySelector(".kursy__euro").innerText;
let kursDolar = document.querySelector(".kursy__dolar").innerText;
let kursFrank = document.querySelector(".kursy__frank").innerText;
let wynik = document.querySelector(".wynik");
let formularz = document.querySelector(".form");
let euro = document.querySelector(".euro");
let dolar = document.querySelector(".dolar");
let frank = document.querySelector(".frank");
let buttonReset = document.querySelector(".buttonReset");

let pole3 = Number(kursEuro);
let pole4 = +kursEuro;

// Sprawdzenie zawartości pola input przez wartośc value

pole.value


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



formularz.addEventListener("input", () =>{
    if (euro.checked === true){
        pole2.value = kursEuro;
        wybranaWaluta.innerText = "euro";
        }
        else if (dolar.checked === true){
            pole2.value = kursDolar;
            wybranaWaluta.innerText = "dolar";
        } else if (frank.checked === true){
            pole2.value = kursFrank;
            wybranaWaluta.innerText = "frank";
        }


        let listakursy = document.querySelector(".lista-kursy").value;
let listawybranawakuta = document.querySelector(".lista-kursy-wybrana");

switch (listakursy){
case "euro":
    listawybranawakuta.innerText="Euro";
brake;
case "dolar":
    listawybranawakuta.innerText = "Dolar";
    brake;
case "frank":
    listawybranawakuta.innerText = "Frank";
    break;
}
})

formularz.addEventListener("submit", (event) =>{
    event.preventDefault();
    
    let przeliczenie = +pole.value * +pole2.value;
 
    wynik.innerText = `${pole.value}zł to w przeliczeniu ${przeliczenie} ${wybranaWaluta.innerText}`;
 })

 buttonReset.addEventListener("click", () => {
     wynik.innerText = "";
 })