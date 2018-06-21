
function doIt() {
	const div = document.getElementById('resultado')
	let text = ""
	for (let i = 0; i <= 500; ++i) {
		if(i % 2 == 0)
			text += i+" ";
	}
	div.innerHTML += text
}

window.onload = function () {
	doIt()
}
