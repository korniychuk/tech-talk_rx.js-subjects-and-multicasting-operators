import { Subject, ConnectableObservable, interval } from 'rxjs';
import { multicast, publish, refCount, tap } from 'rxjs/operators';

import { log, observerA, observerB, observerC, observerD } from './common.inc';

/**
 * RefCount: automatically starting and stopping an execution
 */

const shared = interval(1000)
  .pipe(
     tap(x => log('source ' + x)),
     // multicast(new Subject()),
     publish(),
     refCount(),
  )
  // ) as ConnectableObservable<number>
;


/*
// Old Rx.js version
const shared = Observable.interval(1000)
  .do(x => log('source ' + x))
  .multicast(new Subject())
  .refCount();
 */

// shared.connect();

const subA = shared.subscribe(observerA); // start


let subB;
setTimeout(() => {
  subB = shared.subscribe(observerB); // 1 => 2
}, 3000);

setTimeout(() => {
  subA.unsubscribe(); // 2 => 1
  log('unsubscribed A');
}, 6000);

setTimeout(() => {
  subB.unsubscribe(); // 1 => 0 (stop)
  log('unsubscribed B');
}, 8000);



