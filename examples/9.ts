import { share, tap } from 'rxjs/operators';
import { interval } from 'rxjs';

import { log, observerA, observerB, observerC, observerD } from './common.inc';

/**
 * Multicasting shortcuts: publish() and variants
 */

const shared = interval(1000)
  .pipe(
    tap(x => log('source ' + x)),
    share(),
  );


/*
// Old Rx version
const shared = Observable.interval(1000)
               .do(x => log('source ' + x))
               .share();
*/

// share = publish().refCount()
// shareReplay = publishReplay().refCount()

// publish = multicast + Subject
// publishReplay = multicast + ReplaySubject
// publishBehavior = multicast + BehaviorSubject
// publishLast = multicast + AsyncSubject


const subA = shared.subscribe(observerA);


let subB;
setTimeout(function () {
  subB = shared.subscribe(observerB);
}, 3000);

setTimeout(function () {
  subA.unsubscribe();
  log('unsubscribed A');
}, 6000);

setTimeout(function () {
  subB.unsubscribe();
  log('unsubscribed B');
}, 8000);




