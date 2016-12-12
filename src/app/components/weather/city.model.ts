class MainWeather {
	public temp:string;
}

class CoordLocation {
	public lat: number;
	public lon: number;
}

export class City {
	public name:string;
	public main:MainWeather;
	public coord:CoordLocation;
}