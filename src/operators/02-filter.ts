import {from, fromEvent, range} from "rxjs";
import {filter, map} from "rxjs/operators";

range(20, 30).pipe(filter((x, index) => {
  console.log('index', index);
  return x % 2 === 1;
}));

interface Character {
  type: string;
  name: string;
}


const characters: Character[] = [
  {type: 'hero', name: 'Batman'},
  {type: 'hero', name: 'Robin'},
  {type: 'villain', name: 'Joker'},
]

from(characters).pipe(filter(hero => hero.type !== 'hero')).subscribe(console.log)


const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup')
  .pipe(map(event => event.code), filter(code => code === 'Enter'));
keyUp$.subscribe(console.log)
