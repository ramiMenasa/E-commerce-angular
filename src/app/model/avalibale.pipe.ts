import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'avalibale'
})
export class AvalibalePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if(value>0){
    return "In Stoke";
    }
    else{
      return"Out of Stock"
    }
  }

}
