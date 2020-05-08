import {fromEvent, interval} from "rxjs";
import {concatMap, exhaustMap, take} from "rxjs/operators";


const click$ = fromEvent(document, 'click')
const interval$ = interval(500).pipe(take(3));


click$.pipe(
  exhaustMap(() => interval$)
).subscribe(console.log)
