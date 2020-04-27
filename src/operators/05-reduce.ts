import {interval} from "rxjs";
import {reduce, take} from "rxjs/operators";

const totalReduce = (acc: number, value: number): number => {
  return acc + value;
}

interval(500)
  .pipe(
    take(6),
    reduce(totalReduce)
  )
  .subscribe({
    next: val => console.log("next: ", val),
    complete: () => console.log("complete")
  })
