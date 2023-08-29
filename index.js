const horas = document.getElementById("hours");
const minutos = document.getElementById("minutes");
const segundos = document.getElementById("seconds");

const digitalWatch = setInterval(function time() {
	let dateToday = new Date();
	let hours = dateToday.getHours();
	let minutes = dateToday.getMinutes();
	let seconds = dateToday.getSeconds();

	if (hours < 10) hours = "0" + hours;
	if (minutes < 10) minutes = "0" + minutes;
	if (seconds < 10) seconds = "0" + seconds;

	horas.textContent = hours;
	minutos.textContent = minutes;
	segundos.textContent = seconds;
});
