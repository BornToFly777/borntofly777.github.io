import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'temperatureConverter'})
export class TemperatureConverterPipe implements PipeTransform {
  transform(value: number, args: string[]): number {
    if (!value) return value;

    return value - 273.15;
  }
}