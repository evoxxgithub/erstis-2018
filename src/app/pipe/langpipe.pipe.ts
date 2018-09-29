import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'langpipe'
})
export class LangpipePipe implements PipeTransform {

  private static de = {};

  private static en = {};

  transform(value: any, args?: any): any {
    return null;
  }

}
