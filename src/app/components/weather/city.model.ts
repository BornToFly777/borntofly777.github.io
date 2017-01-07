import { Coords } from './coords.model';

class MainWeather {
	public temp:string;
}

export class City {
	public name:string;
	public main:MainWeather;
	public coord:Coords;
	public favourite:boolean;
	public id:number;
}