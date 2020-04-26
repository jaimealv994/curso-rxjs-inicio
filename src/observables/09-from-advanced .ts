import {from} from "rxjs";

const observer = {
  next: val => console.log('next :', val),
  complete: () => console.log("complete")
}

// const source$ = from([1, 2, 3, 4, 5]);
// const source$ = of(...[1,2,3,4,5]);
// const source$ = from('Jaime');

// const source$ = from(fetch('https://api.github.com/users/jaimealv994'));

// source$.pipe(switchMap(res => {
//   return res.json()
// })).subscribe(observer)

const myGenerator = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

const iterable = myGenerator();

// for (let i of iterable) {
//   console.log(i)
// }

from(iterable).subscribe(observer)
