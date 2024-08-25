document.querySelector('#run').addEventListener('click', function (e) {
	let query = document.querySelector('#query').value

	if (query) window.location = `https://www.google.ru/search?q=${query}`
})