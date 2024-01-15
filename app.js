let showIcons = document.querySelector('#img-icons')
let conditionDay = document.querySelector('.day');
let showTemp = document.querySelector('.temp');
let showCity = document.querySelector('.city');
let getCityName = document.querySelector('#search');
let currentlocation = document.querySelector('.currentloca');
let cityBtn = document.querySelector('.submit');

cityBtn.onclick = () => {
	if (getCityName.value == "") {
		alert('Enter your शहर')
	}
	else {
		getData();
		getCityName.value = "";
	}
}

currentlocation.onclick = () => {
	getLocation();
}

function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(getPositon);
	}
	else {
		x.innerHTML = 'Your place is not present';
	}
}
function getPositon(position) {
	let latiud = position.coords.latitude
	let logitud = position.coords.longitude
	currentPlaceData(latiud, logitud)

}


let apiUrl = `https://api.openweathermap.org/data/2.5/weather?&units=metric`;
let apiKey = 'ba07a1f652183832059ba0f2d6490608';

async function getData() {
	try {
		let x = getCityName.value
		let response = await fetch(apiUrl + `&q=${x}` + `&appid=${apiKey}`);
		let data = await response.json();

		if (!data.ok) {
			conditionDay.innerHTML = `${data.weather[0].description}`;
			showTemp.innerHTML = `Temp:${Math.round(data.main.temp)}&deg;C|Humi:${Math.round(data.main.humidity)}%|wind:${Math.round(data.wind.speed)}km/h`
			showCity.innerHTML = `${data.name}`;
			switch (data.weather[0].main) {
				case 'Clear':
					showIcons.src = "wetherimg/Clear.png";
					break;
				case 'Clouds':
					showIcons.src = "wetherimg/Clouds.png"
					break;
				case 'Rain':
					showIcons.src = "wetherimg/Rain.png";
					break;
				case 'Thunder':
					showIcons.src = "wetherimg/Thunderstorm.webp";
					break;
				case 'Haze':
					showIcons.src = "wetherimg/Haze.png";
					break;
				case 'Mist':
					showIcons.src = "wetherimg/Haze.png";
					break;
				case 'Smoke':
					showIcons.src = "wetherimg/Haze.png";
					break;
				case 'Dust':
					showIcons.src = "wetherimg/Haze.png";
					break;
				case 'Fog':
					showIcons.src = "wetherimg/Haze.png";
					break;
				case 'Sand':
					showIcons.src = "wetherimg/Haze.png";
					break;
				case 'Dust':
					showIcons.src = "wetherimg/Haze.png";
					break;
				case 'Ash':
					showIcons.src = "wetherimg/Haze.png";
					break;
				case 'Squall':
					showIcons.src = "wetherimg/Haze.png";
					break;
				case 'Tornado':
					showIcons.src = "wetherimg/Haze.png";
					break;
				case 'Snow':
					showIcons.src = "wetherimg/Snow.webp";
					break;

			}
		}
		else {
			showCity.innerHTML = `${data.message}`
		};



	} catch (error) {
		conditionDay.innerHTML = "404"
		showTemp.innerHTML = "शहर not found"
		showCity.innerHTML = '😒'
		showIcons.src = "wetherimg/error.webp"
	}
}

function defultvalues() {
	let apiUrldef = `https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=ba07a1f652183832059ba0f2d6490608&q=delhi`;
	let showCity = document.querySelector('.city');

	getdatas();

	async function getdatas() {
		let x = await fetch(apiUrldef);
		let y = await x.json();

		conditionDay.innerHTML = `${y.weather[0].description}`;
		showTemp.innerHTML = `Temp:${Math.round(y.main.temp)}&deg;C|Humi:${Math.round(y.main.humidity)}%|wind:${Math.round(y.wind.speed)}km/h`
		showCity.innerHTML = `${y.name}`;

		switch (y.weather[0].main) {
			case 'Clear':
				showIcons.src = "wetherimg/Clear.png";
				break;
			case 'Clouds':
				showIcons.src = "wetherimg/Clouds.png"
				break;
			case 'Rain':
				showIcons.src = "wetherimg/Rain.png";
				break;
			case 'Thunder':
				showIcons.src = "wetherimg/Thunderstorm.webp";
				break;
			case 'Haze':
				showIcons.src = "wetherimg/Haze.png";
				break;
			case 'Mist':
				showIcons.src = "wetherimg/Haze.png";
				break;
			case 'Smoke':
				showIcons.src = "wetherimg/Haze.png";
				break;
			case 'Dust':
				showIcons.src = "wetherimg/Haze.png";
				break;
			case 'Fog':
				showIcons.src = "wetherimg/Haze.png";
				break;
			case 'Sand':
				showIcons.src = "wetherimg/Haze.png";
				break;
			case 'Dust':
				showIcons.src = "wetherimg/Haze.png";
				break;
			case 'Ash':
				showIcons.src = "wetherimg/Haze.png";
				break;
			case 'Squall':
				showIcons.src = "wetherimg/Haze.png";
				break;
			case 'Tornado':
				showIcons.src = "wetherimg/Haze.png";
				break;
			case 'Snow':
				showIcons.src = "wetherimg/Snow.webp";
				break;

		}
	}
}
defultvalues()

function currentPlaceData(lat, lon) {
	let currentPlace = `https://api.openweathermap.org/data/2.5/weather?&units=metric&lat=${lat}&lon=${lon}&appid=379ba44d34820317e2e870d158abf9cc`;

	getCurrent();

	async function getCurrent() {
		let x = await fetch(currentPlace);
		let y = await x.json();

		console.log(y)

		conditionDay.innerHTML = `${y.weather[0].description}`;
		showTemp.innerHTML = `Temp:${Math.round(y.main.temp)}&deg;C|Humi:${Math.round(y.main.humidity)}%|wind:${Math.round(y.wind.speed)}km/h`
		showCity.innerHTML = `${y.name}`;

		switch (y.weather[0].main) {
			case 'Clear':
				showIcons.src = "wetherimg/Clear.png";
				break;
			case 'Clouds':
				showIcons.src = "wetherimg/Clouds.png"
				break;
			case 'Rain':
				showIcons.src = "wetherimg/Rain.png";
				break;
			case 'Thunder':
				showIcons.src = "wetherimg/Thunderstorm.webp";
				break;
			case 'Haze':
				showIcons.src = "wetherimg/Haze.png";
				break;
			case 'Mist':
				showIcons.src = "wetherimg/Haze.png";
				break;
			case 'Smoke':
				showIcons.src = "wetherimg/Haze.png";
				break;
			case 'Dust':
				showIcons.src = "wetherimg/Haze.png";
				break;
			case 'Fog':
				showIcons.src = "wetherimg/Haze.png";
				break;
			case 'Sand':
				showIcons.src = "wetherimg/Haze.png";
				break;
			case 'Dust':
				showIcons.src = "wetherimg/Haze.png";
				break;
			case 'Ash':
				showIcons.src = "wetherimg/Haze.png";
				break;
			case 'Squall':
				showIcons.src = "wetherimg/Haze.png";
				break;
			case 'Tornado':
				showIcons.src = "wetherimg/Haze.png";
				break;
			case 'Snow':
				showIcons.src = "wetherimg/Snow.webp";
				break;

		}
	}


}



// -- clock code here ---
let hr_Niddle = document.querySelector('.hr');
let min_Niddle = document.querySelector('.min');
let sec_Niddle = document.querySelector('.sec');


function displayclocktime() {
	let date = new Date();
	let hour = date.getHours();
	let min = date.getMinutes();
	let sec = date.getSeconds();
	let hr_rotate = 30 * hour + min / 2;
	let min_rotate = 6 * min;
	let sec_rotate = 6 * sec;


	hr_Niddle.style.transform = `rotate(${hr_rotate}deg)`;
	min_Niddle.style.transform = `rotate(${min_rotate}deg)`;
	sec_Niddle.style.transform = `rotate(${sec_rotate}deg)`;

}

setInterval(displayclocktime, 1000);


let digit_hr = document.querySelector('#hours');
let digit_min = document.querySelector('#minutes');
let digit_sec = document.querySelector('#secound');

function displaydigitclock() {
	let din = new Date();
	let hrr = din.getHours();
	let min = din.getMinutes();
	let sec = din.getSeconds();

	digit_hr.innerHTML = `${hrr}`;
	digit_min.innerHTML = `${min}`
	digit_sec.innerHTML = `${sec}`
}
setInterval(displaydigitclock, 1000);


let timeperiod = document.querySelector('.dates');
let day = document.querySelector('#days');

let daytext = new Date();
let year = daytext.getFullYear();
let monunth = daytext.getMonth();
let dates = daytext.getDate();

let dayarr = ['रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'बृहस्पतिवार', 'शुक्रवार', 'शनिवार'];

timeperiod.innerHTML = `${dates} / ${monunth} + 1 / ${year}`
day.innerHTML = `${dayarr[daytext.getDay()]}`;
