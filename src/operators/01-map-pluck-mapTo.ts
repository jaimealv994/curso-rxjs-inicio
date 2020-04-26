import {fromEvent} from "rxjs";
import {map, mapTo, pluck} from "rxjs/operators";

// range(1, 5).pipe(map<number, string>(x => (x * 10).toString())).subscribe(console.log)

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');
const keyUpCode$ = keyUp$.pipe(map(event => event.code));
const keyUpPluck$ = keyUp$.pipe(pluck('target', 'baseURI'));
const keyUpMapTo$ = keyUp$.pipe(mapTo('pressed key'))

keyUpPluck$.subscribe(val => console.log('pluck', val))
keyUpCode$.subscribe(val => console.log('map', val))
keyUpMapTo$.subscribe(val => console.log('mapTo', val))
