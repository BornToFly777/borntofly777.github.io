const API_WEATHER_KEY = 'f9ddf31de1f2a7aafa162e68b9ffc586';

class MainWeather {
	public temp:string;
}

class City {
	public name:string;
	public main:MainWeather;
}

let loadWeather = (url:string):Promise<Array<City>> => {
	return new Promise<Array<City>>((resolve, reject) => {
		fetch(url)
			.then(response => response.json())
			.then(body => resolve(body.list))
			.catch(error => reject(error))
	});
};

let show_map = (position:Position) => {
	let latitude:number = position.coords.latitude,
		longitude:number = position.coords.longitude;

	let URL:string = 'http://api.openweathermap.org/data/2.5/find?lat=' + latitude + '&lon=' + longitude + '&cnt=10&appid=' + API_WEATHER_KEY;

	let docFragment:DocumentFragment = document.createDocumentFragment();

	weatherData = loadWeather(URL);

	let map = new google.maps.Map(document.getElementById('map'), {
		zoom: 8,
		center: {
			lat: latitude,
			lng: longitude
		}
	});

	new google.maps.Marker({
		position: {
			lat: latitude,
			lng: longitude
		},
		map: map
	});

	weatherData
		.then(data => {
			for (let city of data) {
				let div:HTMLElement = document.createElement('div'),
					h3:HTMLElement = document.createElement('h3'),
					p:HTMLElement = document.createElement('p');

				h3.innerHTML = city.name;
				p.innerHTML = city.main.temp;

				div.appendChild(h3);
				div.appendChild(p);
				docFragment.appendChild(div);
			}
			document.getElementById('weather').appendChild(docFragment);
		})
		.catch(error => {
			let p:HTMLElement = document.createElement('p');
			p.innerHTML = 'Error: ' + error.message;
			document.getElementById('weather').appendChild(p);
		});
};

let weatherData:Promise<Array<City>>;

let init = () => navigator.geolocation.getCurrentPosition(show_map);

init();