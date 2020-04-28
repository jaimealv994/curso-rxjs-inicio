import {of} from "rxjs";
import {take, tap} from "rxjs/operators";

const numbers$ = of(1, 2, 3, 4, 5);

numbers$.pipe(tap(value => console.log("T", value)), take(3)).subscribe({
  next: value => console.log('next:', value),
  complete: () => console.log("Complete")
})
