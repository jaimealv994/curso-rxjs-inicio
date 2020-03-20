import { Observable, UnsubscriptionError, Observer } from 'rxjs';

const observer: Observer<string> = {
	next: (valor) => console.log(valor),
	complete: () => console.log('Completed'),
	error: (error) => console.warn(error)
};

const obs$ = new Observable<string>((subs) => {
	subs.next('Hola');
	subs.next('Mundo');

	subs.next('Hola');
	subs.next('Mundo');

	// Force error
	const a = undefined;
	a.nombre = 'Fernando';

	subs.complete();

	subs.next('Hola');
	subs.next('Mundo');
});

obs$.subscribe(observer);
