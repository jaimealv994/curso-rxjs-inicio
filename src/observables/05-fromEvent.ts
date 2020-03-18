import {fromEvent, Observer} from 'rxjs'

/**
 * DOM events
 */

 const src1$ = fromEvent<MouseEvent>(document, "click");
 const src2$ = fromEvent<KeyboardEvent>(document, "keyup");

const observer = {
    next: val => console.log('next ', val)
};

src1$.subscribe(({x, y}) => {
    console.log(x, y);
});

src2$.subscribe(event => {
    console.log(event.key);
});