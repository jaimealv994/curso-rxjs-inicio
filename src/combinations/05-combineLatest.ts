import {combineLatest, fromEvent} from "rxjs";
import {pluck} from "rxjs/operators";

const input1 = document.createElement('input');
input1.placeholder = 'email@gmail.com';
input1.type = 'email';
const input2 = document.createElement('input');
input2.placeholder = '****';
input2.type = 'password';


document.querySelector('body').append(input1, input2);

const getInputStream = (element: HTMLElement) => {
  return fromEvent<KeyboardEvent>(element, 'keyup').pipe(
    pluck<KeyboardEvent, string>('target', 'value')
  )
}

combineLatest([getInputStream(input1), getInputStream(input2)])
  .subscribe(console.log)
