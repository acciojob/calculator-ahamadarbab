const input = document.getElementById("input");

// Number Buttons
for(let i = 0; i <= 9; i++) {
	document
		.getElementById(`block${i}`)
		.addEventListener("click", () => {
			input.value += i;
		});
}

// Operators
document.getElementById("plus").onclick = () => input.value += "+";
document.getElementById("minus").onclick = () => input.value += "-";
document.getElementById("multiply").onclick = () => input.value += "*";
document.getElementById("divide").onclick = () => input.value += "/";
document.getElementById("dot").onclick = () => input.value += ".";

// Clear
document.getElementById("clr").onclick = () => input.value = "";

// Answer
document.getElementById("ans").onclick = () => {
	try {
		input.value = eval(input.value);
	} catch (e) {
		input.value = "Error";
	}
};
