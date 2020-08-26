import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Pipe({
  name: 'emptyCheck'
})
export class EmptyCheckPipe implements PipeTransform {

  transform(value: Observable<any>, ...args: unknown[]): unknown {

    return value.pipe(
      map(it => {
        return it.length !== 0;
      })
    );
  }

}
