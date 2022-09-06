/**
 * Return the value of die roll
 * @param {number} rolls - number of rolls default = 1.
*/
function getDiceRoll(rolls) {
	rolls = (isNaN(parseInt(rolls)) || rolls < 1) ? 1 : rolls;
	let rollValue = 0;
	for (let i = 1; i <= rolls; i++) {
		rollValue += Math.floor(Math.random() * 6) + 1;
	}

	let i2 = 1
	while (i2 <= rolls) {
		rollValue += Math.floor(Math.random() * 6) + 1;
		i2++
	}

	let i3 = 1
	do {
		rollValue += Math.floor(Math.random() * 6) + 1;
		i3++
	} while (i3 <= rolls)

	return rollValue;
}

let sum = 0;
const numbers = [65, 44, 12, 4];

numbers.forEach(myFunction);

function myFunction(item) {
	sum += item;
}