import { BehaviorSubject } from 'rxjs';

import { log, observerA, observerB, observerC, observerD } from './common.inc';

/**
 * BehaviorSubject: representing a value over time
 */

const subject = new BehaviorSubject(0);

subject.subscribe(observerA);
log('observerA subscribed');

subject.next(1);
subject.next(2);
subject.next(3);
subject.complete();

// Age vs Birthdays

/*
0---1---2---3---------------
 0..1...2...3...
                      3.....
*/

setTimeout(function () {
  subject.subscribe(observerB);
  log('observerB subscribed');
}, 2000);
