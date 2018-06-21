
function doIt() {
	const div = document.getElementById('resultado')
	let text = ""
	for (let i = 0; i <= 100; ++i) {
		text += i+" ";
	}
	div.innerHTML += text
}

window.onload = function () {
	doIt()
}
