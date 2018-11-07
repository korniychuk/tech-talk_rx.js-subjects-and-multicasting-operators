import { ReplaySubject, BehaviorSubject } from 'rxjs';

import { log, observerA, observerB, observerC, observerD } from './common.inc';

/**
 * BehaviorSubject: representing a value over time
 */


const subject = new ReplaySubject(100);
// const subject = new ReplaySubject(100, 300);
// const subject = new BehaviorSubject(0);


subject.subscribe(observerA);
log('observerA subscribed');

setTimeout(() => subject.next(1), 100);
setTimeout(() => subject.next(2), 200);
setTimeout(() => subject.next(3), 300);
setTimeout(() => subject.next(4), 400);
setTimeout(() => subject.next(5), 500);
setTimeout(() => subject.complete(), 550);

/*
----1---2---3--|
  ..1...2...3...
                 1,2,3|
*/

setTimeout(function () {
  subject.subscribe(observerB);
  log('observerB subscribed');
}, 500);
