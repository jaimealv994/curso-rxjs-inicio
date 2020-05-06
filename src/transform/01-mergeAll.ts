import {fromEvent, Observable} from "rxjs";
import {debounceTime, map, mergeAll, pluck} from "rxjs/operators";
import {ajax} from "rxjs/ajax";
import {GithubUser} from "../interfaces/github-user.interface";
import {GithubUsersResp} from "../interfaces/github-users.interface";

const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput, orderList)

const showUsers = (users: GithubUser[]) => {
  orderList.innerHTML = '';
  for (let user of users) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    const anchor = document.createElement('a')

    img.src = user.avatar_url;
    anchor.href = user.html_url;
    anchor.text = 'Ver Página';
    anchor.target = '_blank';

    li.append(img)
    li.append(user.login + ' ')
    li.append(anchor)

    orderList.append(li)
  }
}

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');


input$.pipe(
  debounceTime<KeyboardEvent>(500),
  pluck<KeyboardEvent, string>('target', 'value'),
  map<string, Observable<GithubUsersResp>>(text => ajax.getJSON(`https://api.github.com/search/users?q=${text}`)),
  mergeAll<GithubUsersResp>(),
  pluck<GithubUsersResp, GithubUser[]>('items')
).subscribe(showUsers)
