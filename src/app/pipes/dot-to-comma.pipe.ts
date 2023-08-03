import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dotToComma',
})
export class DotToCommaPipe implements PipeTransform {
  transform(value: number | string) {
    const valueNumber: string | number = parseFloat(value.toString()).toFixed(
      2
    );
    return valueNumber.toString().replace('.', ',');
  }
}
