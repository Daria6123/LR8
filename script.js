let username = prompt("Введіть ім'я");
document.getElementById("userName").innerHTML=username;
if(!username||username.trim()===""){
username="Гравець";
}
let winP=0;
	let winC=0;
	let round=0;
function getNumber(){
	return Math.floor(Math.random()*50)+1;
}
function Random(){
	let userValue = getNumber();
	let computerValue = getNumber();
	document.getElementById("userValue").innerHTML=userValue;
	document.getElementById("computerValue").innerHTML=computerValue;
	if(userValue>computerValue)
		winP++;
	else if(computerValue>userValue)
		winC++;
	round++;
	document.getElementById("winP").innerHTML=winP;
	document.getElementById("winC").innerHTML=winC;
	if (winP === 3) {
    alert("Користувач: " + username + " переміг!");
  } else if (winC === 3) {
    alert("Комп'ютер переміг!");
  }
}
const button = document.getElementById("button");
button.onclick= () =>Random();
