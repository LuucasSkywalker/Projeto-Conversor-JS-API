
const ConverNow = () =>
    {
        let amount = parseInt(document.getElementById("amount").value);
        let fromCurrency = document.getElementById("fromCurrency").value;
        let toCurrency = document.getElementById("toCurrency").value;
         
        var myHeaders = new Headers();
myHeaders.append("apikey", "PsP18OFyBF9wcybQUlcZbFf3ulUify0U");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/exchangerates_data/convert?to=" + toCurrency + "&from=" + fromCurrency + "&amount=" + amount + "", requestOptions)
  .then(response => response.json())
  .then(json => {
        let cotacao = json.result;
        document.getElementById("resultDisplay").innerHTML = cotacao;
  })
  .catch(error => console.log('error', error));

    }
