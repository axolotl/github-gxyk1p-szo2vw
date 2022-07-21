import { Subject } from "rxjs";

const countsSubject = new Subject();
const increment = () => countsSubject.next(1);
const decrement = () => countsSubject.next(-1);
const getObservable = () => countsSubject.asObservable();

export { increment, decrement, getObservable };
