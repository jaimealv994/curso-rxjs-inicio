import {fromEvent, interval} from "rxjs";
import {skip, takeUntil, tap} from "rxjs/operators";

const button = document.createElement('button');
button.innerHTML = 'Stop Timer';

document.querySelector('body').append(button)


const counter$ = interval(1000);
// const click$ = fromEvent(button, 'click');
const click$ = fromEvent(button, 'click').pipe(
  tap(() => console.log("before")),
  skip(1),
  tap(() => console.log("after")),
);

counter$.pipe(takeUntil(click$)).subscribe({
  next: value => console.log("next", value),
  complete: () => console.log("Complete")
})
