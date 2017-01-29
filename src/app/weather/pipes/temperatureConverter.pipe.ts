import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'temperatureConverter'})
export class TemperatureConverterPipe implements PipeTransform {
  transform(value: number, args: string[]): number {
    const KELVIN_CELSIY_DIFFERENCE = -273.15
    
    if (!value) return value;

    return value + KELVIN_CELSIY_DIFFERENCE;
  }
}