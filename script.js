const select_initial = document.getElementById("select_initial_currency");
const select_result = document.getElementById("select_result_currency");
const initial_currency_input = document.getElementById(
  "initial_currency_input"
);
const result_currency_input = document.getElementById("result_currency_input");
const convert_btn = document.getElementById("convert_btn");
const select_tag = document.getElementsByName("select");

// Select option in initialize part
const usd_init = document.getElementById("USD_init");
const eur_init = document.getElementById("EUR_init");
const rub_init = document.getElementById("RUB_init");
const azn_init = document.getElementById("AZN_init");

// Select option in result part
const usd_res = document.getElementById("USD_res");
const eur_res = document.getElementById("EUR_res");
const rub_res = document.getElementById("RUB_res");
const azn_res = document.getElementById("AZN_res");

const currencies = [];

// Getting data
async function getAPI() {
  const request = await fetch("https://freetestapi.com/api/v1/currencies");

  const jsonArray = await request.json();

  for (let key in jsonArray) {
    if (jsonArray[key].id === 3) {
      currencies.push(jsonArray[key]);
    }
    if (jsonArray[key].id === 6) {
      currencies.push(jsonArray[key]);
    }
    if (jsonArray[key].id === 16) {
      currencies.push(jsonArray[key]);
    }
    if (jsonArray[key].id === 203) {
      currencies.push(jsonArray[key]);
    }
  }
  console.log(currencies);
}

let init_curr, res_curr;

let firstValyute;
let secondValyute;
select_initial.onchange = () => {
  init_curr = select_initial.value;
  currencies.forEach((val) => {
    if (val.code == init_curr) {
      firstValyute = val;
    }
  });
  console.log(firstValyute.exchange_rate);
};
select_result.onchange = () => {
  res_curr = select_result.value;
  currencies.forEach((val) => {
    if (val.code == res_curr) {
      secondValyute = val;
    }
  });
  console.log(secondValyute.exchange_rate);
};

function calculateCurrency() {
  if(select_result.value === "USD"){
    let usd = initial_currency_input.value / firstValyute.exchange_rate;
    result_currency_input.value = usd.toFixed(2);
  }
  else{
    let usd = initial_currency_input.value * firstValyute.exchange_rate;
    let nextVal = usd * secondValyute.exchange_rate;
    result_currency_input.value = nextVal.toFixed(2);
  }
}

getAPI();
