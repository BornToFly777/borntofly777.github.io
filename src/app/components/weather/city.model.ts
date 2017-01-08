import { Coords } from './coords.model';
import { Wind } from './wind.model';
import { Weather } from './weather.model';

class MainWeather {
	public temp:string;
}

export class City {
	public name:string;
	public main:MainWeather;
	public coord:Coords;
	public favourite:boolean;
	public id:number;
	public wind:Wind;
	public weather:Array<Weather>;
}