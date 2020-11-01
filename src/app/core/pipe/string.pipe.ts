import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'string'
})
export class StringPipe implements PipeTransform {

  transform(value):any {
    return (value.substring(0,20) +'...')
  }

}
