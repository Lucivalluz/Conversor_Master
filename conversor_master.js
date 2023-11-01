const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select") // Moeda para que será convertida
const moneySelect = document.querySelector(".money-select") // Moeda que será convertida

function convertValues() {  // Função da conversão de valores

    const inputCurrencyValue = document.querySelector(".input-currency").value // Valor digitado a ser convertido

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor a ser convertido Real, Dolar, Euro, Libra
    const currencyValueConverted = document.querySelector(".currency-value") // Valor já convertido Dolar, Euro, Libra, Real.

    console.log(currencySelect.value) // Escreve na tela o valor digitado para que será convertido
    console.log(moneySelect.value)   // Escreve na tela o valor digitado que será convertido
    console.log(inputCurrencyValue)


    const dollarToday = 4.99   // Valor do dollar do dia
    const euroToday = 5.27     // Valor do euro do dia
    const libraToday = 6.05    // Valor da libra do dia
    const realtoday = 1.00     // Valor do real


    if (currencySelect.value == "dolar" && moneySelect.value == "brl") {  // Condição se

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dollarToday)

        
    }
    if (currencySelect.value == "dolar" && moneySelect.value == "eur") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * euroToday / dollarToday)

       
    }
    if (currencySelect.value == "dolar" && moneySelect.value == "gbp") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * libraToday / dollarToday)
    }
    if (currencySelect.value == "dolar" && moneySelect.value == "uss") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

    }
    if (currencySelect.value == "euro" && moneySelect.value == "brl") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }
    if (currencySelect.value == "euro" && moneySelect.value == "uss") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * dollarToday / euroToday)

    }
    if (currencySelect.value == "euro" && moneySelect.value == "gbp") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * libraToday / euroToday)

    }
    if (currencySelect.value == "euro" && moneySelect.value == "eur") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

    }
    if (currencySelect.value == "libra" && moneySelect.value == "brl") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)


    }
    if (currencySelect.value == "libra" && moneySelect.value == "uss") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * dollarToday / libraToday)


    }
    if (currencySelect.value == "libra" && moneySelect.value == "gbp") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)


    }
    if (currencySelect.value == "real" && moneySelect.value == "uss") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * dollarToday)


    }
    if (currencySelect.value == "real" && moneySelect.value == "eur") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * euroToday)

    }
    if (currencySelect.value == "real" && moneySelect.value == "gbp") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * libraToday)

    }
    if (currencySelect.value == "real" && moneySelect.value == "brl") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

    }
       
    


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)


    console.log(convertValue)

}

function changeCurrency() {

    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")




    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dolar americano"
        currencyImage.src = "assets/dolar.png"
        

    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "assets/euro.png"
        
    }
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "assets/libra 1.png"
        
    }
    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real Brasileiro"
        currencyImage.src = "assets/real.png"
        
    }

}

    function changeMoney() {

        const moneyName = document.querySelector(".money-name")
        const moneyImage = document.querySelector(".money-img")

        if (moneySelect.value == "uss") {
            moneyName.innerHTML = "Dolar americano"
            moneyImage.src = "assets/dolar.png"
            

        }
        if (moneySelect.value == "brl") {
            moneyName.innerHTML = "Real Brasileiro"
            moneyImage.src = "assets/real.png"

        }
        if (moneySelect.value == "eur") {
            moneyName.innerHTML = "Euro"
            moneyImage.src = "assets/euro.png"

        }
        if (moneySelect.value == "gbp") {
            moneyName.innerHTML = "Libra"
            moneyImage.src = "assets/libra 1.png"
        }

        convertValues()
    }


    


moneySelect.addEventListener("change", changeMoney)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
