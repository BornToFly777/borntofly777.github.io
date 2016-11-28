(function() {
	'use strict';

	class LoadData {
		public loadWeather: Promise<string>;
		public constructor(url: string) {
			this.loadWeather = new Promise<string>((resolve, reject) => {
				fetch(url)
					.then(response => response.json())
					.then(body => resolve(body.list))
					.catch(error => reject(error))
			})
		}
	}

	let show_map = (position: Position) => {
  		let latitude: number = position.coords.latitude,
  		longitude: number = position.coords.longitude;

		let URL: string = 'https://api.openweathermap.org/data/2.5/find?lat=' + latitude + '&lon=' + longitude + '&cnt=100&appid=f9ddf31de1f2a7aafa162e68b9ffc586';

		let data: LoadData = new LoadData(URL),
			docFragment: DocumentFragment = document.createDocumentFragment();

		data.loadWeather
			.then(data => {
				for (let city of data) {
					let	div: HTMLElement = document.createElement('div'),
						h3: HTMLElement = document.createElement('h3'),
						p: HTMLElement = document.createElement('p');

					h3.innerHTML = city.name;
					p.innerHTML = city.main.temp;

					div.appendChild(h3);
					div.appendChild(p);
					docFragment.appendChild(div);
				}
				document.getElementById('weather').appendChild(docFragment);
			})
			.catch(error => {
				let p: HTMLElement = document.createElement('p');
				p.innerHTML = 'Error: ' + error.message;
				document.getElementById('weather').appendChild(p);
			});
	}

	let init = () => navigator.geolocation.getCurrentPosition(show_map);

	init();

})();