import { Observable, UnsubscriptionError, Observer, Subject } from 'rxjs';

const observer: Observer<number> = {
	next: (valor) => console.log('next: ', valor),
	error: (error) => console.warn('ERROR: ', error),
	complete: () => console.log('Completed')
};

const interval$ = new Observable<number>((subs) => {
	const interval = setInterval(() => subs.next(Math.random()), 1000);
	return () => {
		clearInterval(interval);
		console.log('Clear Interval');
	};
});

const subject$ = new Subject<number>();
const intervalSubject = interval$.subscribe(subject$);

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
	subject$.next(10);
	subject$.complete();
	intervalSubject.unsubscribe();
}, 3500);
