import {from} from "rxjs";
import {pluck, scan} from "rxjs/operators";

const numbers = [1, 2, 3, 4, 5];


const totalAcc = (acc, val) => acc + val;

from(numbers)
  .pipe(scan(totalAcc))
  .subscribe(console.log)

interface User {
  id?: string;
  authenticated?: boolean;
  token?: string;
  age?: number;
}

const user: User[] = [
  {id: 'fher', authenticated: false, token: null},
  {id: 'fher', authenticated: true, token: 'ABC'},
  {id: 'fher', authenticated: true, token: 'ABC123'},
];


const state$ = from(user).pipe(
  scan((acc, val) => {
    return {...acc, ...val};
  }, {age: 33})
)

state$.pipe(pluck('id'))
  .subscribe(console.log)
state$.subscribe(console.log);
