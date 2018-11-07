import { Subject } from 'rxjs';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

import { observerA, observerB, observerC, observerD } from './common.inc';

/**
 * Subject: an Observable and Observer hybrid
 *
 * -^-a-b-c-d|
 * ----^b-c-d|
 */

const observable = interval(1000).pipe(
  take(5),
);

const bridge = new Subject();

observable.subscribe(bridge); // create an execution
/*
observable.subscribe(
  (v) => bridge.next(v),
  (err) => bridge.error(err)
  ); // create an execution
*/



bridge.subscribe(observerA);

setTimeout(() => {
  bridge.subscribe(observerB);
}, 3000);
