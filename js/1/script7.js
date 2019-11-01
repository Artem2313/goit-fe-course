const credits = 23580;

const pricePerDroid = 3000;

const inquiry = Number.parseInt(prompt("How many want to buy?"));

let mes;

if (isNaN(inquiry) || !inquiry) {
    mes = 'enter valid number'
} else if (inquiry * pricePerDroid < credits) {
    const change = credits - inquiry * pricePerDroid;
    mes = `You have bought ${inquiry}, total price is ${inquiry * pricePerDroid} and your change ${change}`
} else {
    mes = "Insufficient number of credits"
}


alert(mes)

