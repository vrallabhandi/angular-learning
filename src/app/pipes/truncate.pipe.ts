import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: any, numberOfChars = 3): any {
    if (value) {
      return `${value.substring(0, numberOfChars)}...`;
    }
    return value;
  }

}
