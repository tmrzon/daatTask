import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filerByTitleYear'
})
export class FilerByTitleYearPipe implements PipeTransform {

  transform(items: any[], filter: string): any {
    if (!items || !filter) {
      return items;
    }
    debugger
    return items.filter(item => item.Title.indexOf(filter) !== -1
      || item.Year.indexOf(filter) !== -1);
  }

}
