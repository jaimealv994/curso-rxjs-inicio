import {range} from "rxjs";
import {map, tap} from "rxjs/operators";

const numbers$ = range(1, 5);

numbers$
  .pipe(
    tap((x) => console.log('before', x)),
    map(val => val * 10),
    tap({
      next: val => console.log('after', val),
      complete: () => console.log("Completed")
    })
  ).subscribe(val => console.log('subs', val))
