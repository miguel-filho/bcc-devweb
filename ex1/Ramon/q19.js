
function doIt() {
	const div = document.getElementById('resultado')
	let text = ""
	for (let i = 0; i < 20; ++i) {
		text += 'repetição <br/>'
	}
	div.innerHTML += text
}

window.onload = function () {
	doIt()
}
