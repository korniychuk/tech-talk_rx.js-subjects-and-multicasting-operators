import { AsyncSubject } from 'rxjs';

import { log, observerA, observerB, observerC, observerD } from './common.inc';

/**
 * AsyncSubject: representing a computation that yields a final value
 */

const subject = new AsyncSubject();

// Subject
// ReplaySubject: replays many, before or after completion
// BehaviorSubject: replays one, only before completion
// AsyncSubject: replays one, only if completed


subject.subscribe(observerA);
log('observerA subscribed');


setTimeout(() => subject.next(1), 100);
setTimeout(() => subject.next(2), 200);
setTimeout(() => subject.next(3), 300);
setTimeout(() => subject.complete(), 350);

/*
----1---2---3--|
  .............3|
                   3|
*/

setTimeout(function () {
  subject.subscribe(observerB);
  log('observerB subscribed');
}, 400);
