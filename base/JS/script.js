//1 Зміна кольору фону за допомоги "mouseover" і "mouseout"!

let colorBox = document.getElementById(`box`);
let colors = [`red`, `yellow`, `green`];
let hover = 0;

colorBox.addEventListener(`mouseover`, function () {
	let colorInOrder = hover % colors.length;
	colorBox.style.backgroundColor = colors[colorInOrder];
	hover++;
});

colorBox.addEventListener(`mouseout`, function () {
	colorBox.style.backgroundColor = `purple`;
});


//2 Міняється фон і текст блока при наведенні мишки і кліку на нього !!

document.querySelector(`.secret`).addEventListener('mouseover', function() {
	event.target.style.backgroundColor = `yellow`;
	event.target.innerHTML = `<strong>Хочеш знати який?</strong>`;
});

document.querySelector(`.secret`).addEventListener('mouseout', function() {
	event.target.style.backgroundColor = `#891383`;
	event.target.innerHTML = `<strong>У мене є секрет!</strong>`;
});

document.querySelector(`.secret`).addEventListener(`mousedown`, function () {
	event.target.innerHTML = `А я тобі не скажу!`;
	event.target.style.color = `white`;
	event.target.style.backgroundColor = `#000000`;
});

document.querySelector(`.secret`).addEventListener(`mouseup`, function () {
	event.target.style.backgroundColor = `yellow`;
	event.target.innerHTML = `<strong>Хочеш знати який?</strong>`;
	event.target.style.color = `#000000`;
});


//3 При кліку на дів вискакує 'промпт' і вводиться URL зображення!!!

function urlBackground(urlImage) {
	const image = prompt(`Введіть URL`);

	if (image !== null) {
		urlImage.style.backgroundImage = `url(${image})`;
	}

	else {
		urlImage.style.borderRadius = `75px`;
		urlImage.textContent =`EMPTY`
		urlImage.style.textAlign = `center`;
		urlImage.style.color = `white`;
		urlImage.style.fontSize = `50px`;
		urlImage.style.backgroundColor = `red`;
		urlImage.style.transition = `5s`;
		urlImage.style.paddingTop = `90px`
	}
}


//4 При кліку мишкою міняються кольори тексту !!!!

document.querySelector('.red').addEventListener('mousedown', function () {
	event.target.style.color = 'red';
	event.target.style.backgroundColor = `yellow`;
});

document.querySelector(`.yellow`).addEventListener(`mousedown`, function () {
	event.target.style.color = `yellow`;
	event.target.style.backgroundColor = `green`;
});

document.querySelector(`.green`).addEventListener(`mousedown`, function () {
	event.target.style.color = `green`;
	event.target.style.backgroundColor = `blue`;
});

document.querySelector(`.blue`).addEventListener(`mousedown`, function () {
	event.target.style.color = `blue`;
	event.target.style.backgroundColor = `orange`;
});

document.querySelector(`.orange`).addEventListener(`mousedown`, function () {
	event.target.style.color = `orange`;
	event.target.style.backgroundColor = `gray`;
});

document.querySelector(`.gray`).addEventListener(`mousedown`, function () {
	event.target.style.color = `gray`;
	event.target.style.backgroundColor = `red`;
});

document.querySelector(`ol`).addEventListener('mouseup', function () {
 event.target.style.backgroundColor = `black`;
 event.target.style.listStyleType = `square`;
 event.target.style.transition = `10s`;
});


// function changeColor(color) {
// 	const activeItem = document.querySelector(`.active`);
// 	if (activeItem) {
// 		activeItem.classList.remove('active');
// 	}
//
// 	const selectedItem = event.target;
// 	selectedItem.style.color = color;
// 	selectedItem.classList.add('.active');
// }


//