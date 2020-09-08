console.log("jsworks");
var cookies = 0; //sets cookies at begining
var grandmas = 0;

function buttonPressed() {  //changes num of cookies when the button is pressed
cookies = cookies + 1;
document.getElementById("cookieDisplay").innerHTML = cookies;
console.log(cookies);
}
function buyGrandma() {
	if cookies = 50 {
		cookies = cookies - 50;
		grandmas = grandmas + 1
		document.getElementById("numGrandmas").innerHTML = grandmas;
	}
	else {
		alert("Not enough cookies, 50 total are needed");
	}
}
/*while(true) {
	if grandmas > 0 {
		cookies = cookies + 2 * grandmas;
	}
}
*/

