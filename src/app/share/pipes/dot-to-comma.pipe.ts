import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dotToComma',
})
export class DotToCommaPipe implements PipeTransform {
  transform(value: number | string, param = 2) {
    const valueNumber: string | number = parseFloat(value.toString()).toFixed(
      param
    );
    return valueNumber.toString().replace('.', ',');
  }
}
