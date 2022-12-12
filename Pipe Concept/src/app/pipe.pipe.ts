import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(value);
    console.log(args);
    
    return "hello";
  }

}
