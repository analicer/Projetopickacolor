
const colors = ['red', 'blue','yellow','purple','green', 'gray']
const btn = document.getElementById('btn')
const color = document.querySelector(' .color')


// no click
btn.addEventListener('click', function(){
	const randomColor = getRandomColor()
	document.body.style.background = colors[randomColor] // aplicando a cor npo background
	color.textContent = colors[randomColor]
	
})


// Gerar os numeros randomicos
function getRandomColor () {
	return Math.floor (Math.random()* colors.length)
	
}