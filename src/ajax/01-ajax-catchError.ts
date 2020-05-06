import {ajax} from "rxjs/ajax";
import {catchError, pluck} from "rxjs/operators";
import {of} from "rxjs";

const url = 'https://api.github.com/users?per_page=5';

ajax(url)
  .pipe(
    pluck('response'),
    catchError(err => {
      console.warn("Error in: ", err);
      return of(null);
    })
  )
  .subscribe(users => console.log("Users: ", users))
