import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettyPrintJson'
})
export class PrettyPrintJsonPipe implements PipeTransform {

  transform(value: any): unknown {

    console.log('transforming');
    if(value==""){
      console.log("empty");
      return null

    }

    console.log(JSON.stringify(value,null,1));

    return JSON.stringify(value,null,1);
  }

}
