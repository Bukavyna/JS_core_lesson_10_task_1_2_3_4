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


//2 При кліку мишкою міняються кольори тексту !!

document.querySelector('.red').addEventListener('mousedown', function () {
	event.target.style.color = 'red';
	event.target.style.backgroundColor = `yellow`;
	// event.target.style.listStyleType = `upper-roman`;
	// event.target.style.transition = `2s`;
});

document.querySelector(`.yellow`).addEventListener(`mousedown`, function () {
	event.target.style.color = `yellow`;
	event.target.style.backgroundColor = `green`;
	// event.target.style.listStyleType = `upper-roman`;
	// event.target.style.transition = `2s`;
});

document.querySelector(`.green`).addEventListener(`mousedown`, function () {
	event.target.style.color = `green`;
	event.target.style.backgroundColor = `blue`;
	// event.target.style.listStyleType = `upper-roman`;
	// event.target.style.transition = `2s`;
});

document.querySelector(`.blue`).addEventListener(`mousedown`, function () {
	event.target.style.color = `blue`;
	event.target.style.backgroundColor = `orange`;
	// event.target.style.listStyleType = `upper-roman`;
	// event.target.style.transition = `2s`;
});

document.querySelector(`.orange`).addEventListener(`mousedown`, function () {
	event.target.style.color = `orange`;
	event.target.style.backgroundColor = `gray`;
	// event.target.style.listStyleType = `upper-roman`;
	// event.target.style.transition = `2s`;
});

document.querySelector(`.gray`).addEventListener(`mousedown`, function () {
	event.target.style.color = `gray`;
	event.target.style.backgroundColor = `red`;
	// event.target.style.listStyleType = `upper-roman`;
	// event.target.style.transition = `2s`;
});

// document.querySelector(`ol`).addEventListener('mouseup', function () {
//  event.target.style.color = `red`;
//  event.target.style.backgroundColor = `black`;
//  event.target.style.listStyleType = `square`;
//  event.target.style.transition = `10s`;
// });
