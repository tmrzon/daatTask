import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arr: [], isAsc: boolean): unknown {
    if (!Array.isArray(arr)) {
      return;
    }
    arr.sort((a: any, b: any) => {
      if (a.Title < b.Title) {
        return -1;
      } else if (a.Title > b.Title) {
        return 1;
      } else {
        return 0;
      }
    });
    if (!isAsc)
      arr.reverse()
    return arr;

  }

}
