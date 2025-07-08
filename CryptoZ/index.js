//Toggling popUp menu
let bar = document.getElementById("bar");

bar.addEventListener('click', () => {
    popDiv.classList.toggle('show');
})

// Optional: Close menu when clicking outside
document.addEventListener('click', (event) => {
    if (!bar.contains(event.target) && !popDiv.contains(event.target)) {
      popDiv.classList.remove('show');
    }
  });

//currency convertion 
const dateInput = document.getElementById("date");
const date = dateInput.valueAsDate;

async function convertCurrency() {
  const amount = document.getElementById("from-box").value;
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;
  const result = document.getElementById("to-box");

  if(amount === "" || amount <= 0){
      result.value = "Please enter a valid amount";
      return;
  }

  const url = `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.rates[toCurrency]) {
      const convertedAmount = data.rates[toCurrency].toFixed(2);
      result.value = convertedAmount;
    } else {
      result.value = "Conversion failed";
    }
  } catch (err) {
    result.value = "Error fetching data";
    console.error(err);
  }
}
  



