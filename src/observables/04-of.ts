import { Observable, UnsubscriptionError, Observer, Subject, of } from 'rxjs';

const obs$ = of<number>(1, 2, 3, 4, 5, 6);
//const obs$ = of<any>([ 1, 2 ], { a: 1, b: 2 }, function() {}, true, Promise.resolve(true));

console.log('Start');
obs$.subscribe({
	next: (next) => console.log('Next: ', next),
	complete: () => console.log('Complete')
});
console.log('End');
