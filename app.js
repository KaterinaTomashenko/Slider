const downBtn = document.querySelector('.down-button')
const upBtn = document.querySelector('.up-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length
let activeSlideIndex = 0
const container = document.querySelector('.container')
const height=container.clientHeight

sidebar.style.top=`-${(slidesCount-1)*100}vh`

downBtn.addEventListener('click', () => {
	changeSlide('down')
})

upBtn.addEventListener('click', () => {
	changeSlide('up')
})

document.addEventListener('keydown', (event) => {
	if (event.key === 'ArrowUp') {
		changeSlide('up')
	} else if (event.key === 'ArrowDown') {
		changeSlide('down')
	}
})

function changeSlide(event) {
	if (event ==='up') {
		activeSlideIndex++
	if (activeSlideIndex === slidesCount) {
		{activeSlideIndex = 0}
	}}

	if (event ==='down') {
		activeSlideIndex--
	if (activeSlideIndex < 0) {
		activeSlideIndex = (slidesCount-1)
	}}

	mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
	sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`

}