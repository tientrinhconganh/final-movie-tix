import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value:number){
    return value.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
  }

}
