var napis = 'Wszystkiego Najlepszego z okazji Dnia Kobiet!'
let ktora = 0

var napisss = ''
var serce = ''
function Serduszko() {
	serce = ktora % 3 == 0 ? '❤ ❤ ❤' : (serce = ktora % 2 == 0 ? '❤ ❤' : '❤')
	document.getElementById('serce').innerHTML = serce
	ktora++
	setTimeout('Serduszko()', 1000)
}

function FajneZapisywanie() {
	if (ktora < napis.length) {
		napisss = napisss + napis[ktora]
		document.getElementById('napis').innerHTML = napisss
		ktora++
		setTimeout('FajneZapisywanie()', 100)
	} else {
		setTimeout('Serduszko()', 100)
	}
}
