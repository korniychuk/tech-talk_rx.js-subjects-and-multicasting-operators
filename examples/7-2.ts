import { Subject, interval } from 'rxjs';
import { multicast, tap } from 'rxjs/operators';

import { log, observerA, observerB, observerC, observerD } from './common.inc';
import { ConnectableObservable } from 'rxjs/internal/observable/ConnectableObservable';

/**
 * Stopping a shared observable execution
 */

const connectableObservable = interval(1000)
  .pipe(
    tap(x => log('source ' + x)),
    multicast(new Subject()),

  ) as ConnectableObservable<number>;

/*
// Old Rx version
const connectableObservable = Rx.Observable.interval(1000)
                              .do(x => log('source ' + x))
                              .multicast(new Rx.Subject());

 */

var sub = connectableObservable.connect(); // start

var subA = connectableObservable.subscribe(observerA);


var subB;
setTimeout(function () {
  subB = connectableObservable.subscribe(observerB);
}, 3000);

setTimeout(function () {
  sub.unsubscribe(); // stop
  log('unsubscribed shared execution');
}, 6000);

