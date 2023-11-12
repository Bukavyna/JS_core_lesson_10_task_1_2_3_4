//Зміна кольору фону за допомоги "mouseover" і "mouseout"!

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
