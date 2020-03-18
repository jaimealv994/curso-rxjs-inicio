import { Observable, UnsubscriptionError, Observer } from 'rxjs';

const observer: Observer<number> = {
	next: (valor) => console.log('next: ', valor),
	error: (error) => console.warn('ERROR: ', error),
	complete: () => console.log('Completed')
};

const interval$ = new Observable<number>((subscriber) => {
	let counter = 0;

	const interval = setInterval(() => {
		subscriber.next(++counter);
	}, 1000);

	setTimeout(() => {
		subscriber.complete();
	}, 2500);

	return () => {
		clearInterval(interval);
	};
});

const subscription1 = interval$.subscribe(observer);
const subscription2 = interval$.subscribe(observer);
const subscription3 = interval$.subscribe(observer);

subscription1.add(subscription2).add(subscription3);

setTimeout(() => {
	subscription1.unsubscribe();
}, 3000);
