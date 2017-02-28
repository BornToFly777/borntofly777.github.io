import { TemperatureConverterPipe } from './temperatureConverter.pipe';

describe('temperatureConverterPipe', () => {

	let pipe = new TemperatureConverterPipe();

	it('transforms "273.15" to "0"', () => {
		expect(pipe.transform(273.15)).toBe(0);
	});

	it('transforms "278.15" to "5"', () => {
		expect(pipe.transform(278.15)).toBe(5);
	});

	it('transforms "270.15" to "-3"', () => {
		expect(pipe.transform(270.15)).toBe(-3);
	});
});