import {fromEvent, of} from "rxjs";
import {catchError, map, pluck, switchMap, tap} from "rxjs/operators";
import {ajax} from "rxjs/ajax";

const form = document.createElement('form')
const inputEmail = document.createElement('input')
const inputPass = document.createElement('input')
const submitBtn = document.createElement('button')

inputEmail.type = 'email'
inputEmail.placeholder = 'Email'
inputEmail.value = 'eve.holt@reqres.in'

inputPass.type = 'password'
inputPass.placeholder = 'Password'
inputPass.value = 'cityslicka'

submitBtn.innerHTML = 'Login'

form.append(inputEmail, inputPass, submitBtn)
document.querySelector('body').append(form)

const loginRequest = (userPass) => {
  return ajax.post('https://reqres.in/api/login?delay=1', userPass).pipe(
    pluck('response', 'token'),
    catchError(() => of(''),
    )
  );
}

const submitForm$ = fromEvent(form, 'submit')
  .pipe(
    tap((event) => {
      event.preventDefault();
    }),
    map((event) => {
      return ({
        email: event.target[0].value,
        password: event.target[1].value
      })
    }),
    // exhaustMap(loginRequest)
    // mergeMap(loginRequest)
    switchMap(loginRequest)
  );

submitForm$.subscribe(token => {
  console.log(token);
});
