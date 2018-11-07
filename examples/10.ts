import { Subject, ReplaySubject } from 'rxjs';

import { multicast, refCount, take, tap } from 'rxjs/operators';
import { interval } from 'rxjs';

import { log, observerA, observerB, observerC, observerD } from './common.inc';




function subjectFactory() {
  return new ReplaySubject();
}

const shared = interval(1000)
  .pipe(
     take(6),
     tap(x => log('source ' + x)),
     multicast(subjectFactory),
     refCount(),
  );


/*
// Old Rx version
var shared = Rx.Observable.interval(1000).take(6)
               .do(x => log('source ' + x))
               .multicast(subjectFactory)
               .refCount();
*/


// subject: --0--1--2--3--4--5|
//                               A
// subject2:                     --0--1--2--3--4--5|


let subA = shared.subscribe(observerA); // 0 => 1
log('subscribed A');

let subB;
setTimeout(function () {
  subB = shared.subscribe(observerB);
  log('subscribed B');
}, 2000);

setTimeout(function () {
  subA.unsubscribe();
  log('unsubscribed A');
}, 5000);

setTimeout(function () {
  subB.unsubscribe();
  log('unsubscribed B');
}, 7000);

setTimeout(function () {
  subA = shared.subscribe(observerA); // 0 => 1 (connect)
  log('subscribed A');
}, 8000);
