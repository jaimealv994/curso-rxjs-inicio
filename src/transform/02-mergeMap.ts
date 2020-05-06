import {fromEvent, interval, of} from "rxjs";
import {map, mergeMap, take, takeUntil} from "rxjs/operators";

const letters = of('a', 'b', 'c');


letters
  .pipe(
    mergeMap(letter => {
      return interval(1000).pipe(
        map(i => letter + i),
        take(3)
      )
    })
  )
// .subscribe({
//   next: value => console.log("Next: ", value),
//   complete: () => console.log("Complete")
// })

const mouseDown$ = fromEvent(document, 'mousedown')
const mouseUp$ = fromEvent(document, 'mouseup')
const interval$ = interval()


mouseDown$
  .pipe(
    mergeMap(() => interval$.pipe(takeUntil(mouseUp$)))
  )
  .subscribe(console.log)
