import { Subject } from 'rxjs';

import { observerA, observerB, observerC, observerD } from './common.inc';

/**
 * Using a Subject as an Event Bus
 *
 * ^-abc---d---->
 * ------^-d---->
 */

const event = new Subject();


event.subscribe(observerA);

setTimeout(() => {
  event.subscribe(observerB);
  // }, 2000);
}, 200);


event.next(1);
event.next(2);
event.next(3);

setTimeout(() => {
  event.next(10);
}, 1000);

// event.complete();
// setTimeout(() => event.complete(), 1500);
