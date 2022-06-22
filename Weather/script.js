const wrapper = document.querySelector(".wrapper"),
	inputPart = document.querySelector(".input-part"),
	infoTxt = inputPart.querySelector(".info-txt"),
	inputField = inputPart.querySelector("input"),
	locationBtn = inputPart.querySelector("button");

//Блок с погодой
const weatherBlock = document.querySelector('#weather');

async function loadWeather(e) {
	weatherBlock.innerHTML = `
		<div class="weather__loading">
			<img src="./img/g0R9.gif" alt="Loading...">
		</div>`;

	const server = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=Minsk&appid=522f7ec766b55c89fccbc47a4e7a72c0';

	const response = await fetch(server, {
		method: 'GET',
	});
	const responseResult = await response.json();

	if (response.ok) {
		getWeather(responseResult);
	} else {
		weatherBlock.innerHTML = responseResult.message;
	}
}

function getWeather(data) {
	//обрабатываем видимые данные
	const location = data.name;
	const temp = Math.round(data.main.temp);
	const feelsLike = Math.round(data.main.feels_like);
	const weatherStatus = data.weather[0].main;
	const weatherIcon = data.weather[0].icon;

	//HTML шаблон
	const template = `
		<div class="weather__header">
	   <div class="weather__main">
		<div class="weather__city">${location}</div>
		<div class="weather__status">${weatherStatus}</div>
	</div>
		<div class="weather__icon">
		<img src="https://openweathermap.org/img/w/${weatherIcon}.png" alt="${weatherStatus}">
	</div>
 </div>
<div class="weather__temp">${temp}</div>
<div class="weather__feels-like">Feels like: ${feelsLike}</div>`;
	weatherBlock.innerHTML = template;
}

if (weatherBlock) {
	loadWeather();
}


/*button

inputPart = document.querySelector(".input-part"),
	infoTxt = document.querySelector(".info-txt"),
	inputField = document.querySelector("input"),
	locationBtn = document.querySelector("button");

let api;

inputField.addEventListener("keyup", e => {
	if (e.key == "Enter" && inputField.value != "") {
		requestApi(inputField.value);
	}
});

locationBtn.addEventListener("click", () => {
	if () {
	};
} else {
		
}
);

function requestApi(city) {
	api = `https://api.openweathermap.org/data/2.5/weather?q=${Minsk}&units=metric&appid=74d998dbd85c36a6740e6ab3dbe0a454`;
	fetchData();
}
;*/