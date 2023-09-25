let showIcons = document.querySelector('#img-icons')
let conditionDay = document.querySelector('.day');
let showTemp = document.querySelector('.temp');
let showCity = document.querySelector('.city');
let getCityName = document.querySelector('#search');
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


let apiUrl = `https://api.openweathermap.org/data/2.5/weather?&units=metric`;
let apiKey = 'ba07a1f652183832059ba0f2d6490608';

async function getData() {
	try {
		let x = getCityName.value
		let response = await fetch(apiUrl + `&q=${x}` + `&appid=${apiKey}`);
		let data = await response.json();

		console.log(data);
		if (!data.ok) {
			conditionDay.innerHTML = `${data.weather[0].description}`;
			showTemp.innerHTML = `Temp:${Math.round(data.main.temp)}&deg;C|Humi:${Math.round(data.main.humidity)}%|wind:${Math.round(data.wind.speed)}km/h`
			showCity.innerHTML = `${data.name}`;
			switch (data.weather[0].main) {
				case 'Clouds':
					showIcons.src = "cloud.avif"
					break;
				case 'Rain':
					showIcons.src = "rain.avif";
					break;
				case 'Snow':
					showIcons.src = "snow.jpg";
					break;
				case 'Thunderstorm':
					showIcons.src = "thunder.avif";
					break;
				case 'Clear':
					showIcons.src = "sunnyday";
					break;
				case 'Mist':
					showIcons.src = "mist.avif";
					break;
			}
		}
		else {
			showCity.innerHTML = `${data.message}`
			// console.log(data.cod)
		};
		


	} catch (error) {
		conditionDay.innerHTML = "404"
		showTemp.innerHTML = "शहर not found"
		showCity.innerHTML = '😒'
		showIcons.src = "error.avif"
	}
}


function defultvalues() {
	let apiUrldef = `https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=ba07a1f652183832059ba0f2d6490608&q=delhi`;
	let showCity = document.querySelector('.city');

	getdatas();

	async function getdatas() {
		let x = await fetch(apiUrldef);
		let y = await x.json();

		console.log(y)

		conditionDay.innerHTML = `${y.weather[0].description}`;
		showTemp.innerHTML = `Temp:${Math.round(y.main.temp)}&deg;C|Humi:${Math.round(y.main.humidity)}%|wind:${Math.round(y.wind.speed)}km/h`
		showCity.innerHTML = `${y.name}`;

		switch (y.weather[0].main) {
			case 'Cloud':
				showIcons.src = "cloud.avif"
				break;
			case 'Rain':
				showIcons.src = "rain.avif";
				break;
			case 'Snow':
				showIcons.src = "snow.jpg";
				break;
			case 'Thunder':
				showIcons.src = "thunder.avif";
				break;
			case 'Clear':
				showIcons.src = "sunnyday";
				break;
			case 'Mist':
				showIcons.src = "mist.avif";
				break;

		}
	}
}
defultvalues()

