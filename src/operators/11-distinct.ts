import {from, of} from "rxjs";
import {distinct} from "rxjs/operators";

const numbers$ = of<number | string>(1, "1", 1, 1, 3, 3, 2, 2, 4, 4, 5, 3, 1, "1")

numbers$.pipe(
  distinct()
).subscribe(console.log)

interface Character {
  name: string;
}

const characters: Character[] = [
  {name: 'Megaman'},
  {name: 'X'},
  {name: 'Zero'},
  {name: 'Dr. Willy'},
  {name: 'X'},
  {name: 'Megaman'},
  {name: 'Zero'},
];

from(characters).pipe(
  distinct(p => p.name)
).subscribe(console.log)
