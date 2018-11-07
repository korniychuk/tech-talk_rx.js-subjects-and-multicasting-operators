import {
  AsyncSubject, ReplaySubject, ConnectableObservable, BehaviorSubject,
  Subject,
  interval,
} from 'rxjs';
import { multicast, take, tap } from 'rxjs/operators';

import { observerA, observerB, observerC, observerD } from './common.inc';

/**
 * Connection operator: multicast and connect
 */

// Pipe operator cannot infer return type as ConnectableObservable
// Issue: https://github.com/ReactiveX/rxjs/issues/2972

const connectableObservable = interval(1000)
  .pipe(
    take(6),
    // multicast(new Subject()),
    // multicast(new ReplaySubject(100)),
    // multicast(new ReplaySubject(1)),
    // multicast(new ReplaySubject(0)),

    // multicast(new BehaviorSubject(111)),
    // multicast(new AsyncSubject()),

  ) as ConnectableObservable<number>; // <---- hack here

/*
// Old version
const connectableObservable = Observable.interval(1000)
  .take(5)
  .multicast(new ReplaySubject(100))
;
*/


connectableObservable.connect();
connectableObservable.subscribe(observerA);

setTimeout(function () {
  connectableObservable.subscribe(observerB);
}, 4500);

