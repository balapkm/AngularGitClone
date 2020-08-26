import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  /**
   * filter the repos
   */
  transform(value: Observable<any>, ...args: unknown[]): unknown {
    return value.pipe(
      map(it => {
        if (it.length !== 0 && args[0] !== '') {
          return it.filter(data => {
            if (data.name.toLocaleLowerCase().includes(args[0])) {
              return data;
            }
          });
        } else {
          return it;
        }
      })
    );
  }

}
