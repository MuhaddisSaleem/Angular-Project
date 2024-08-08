import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdintoprice',
  standalone: true
})
export class UsdintopricePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value*70;
  }

}
