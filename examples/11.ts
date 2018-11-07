import { Subject, interval, merge  } from 'rxjs';

import { log, observerA, observerB, observerC, observerD } from './common.inc';
import { delay, map, multicast, take, tap } from 'rxjs/operators';

/**
 * Multicast with a selector argument, as a sandbox
 */

function subjectFactory() {
  return new Subject();
}
const result = interval(1000)
  .pipe(
    take(6),
    tap(x => log('source: ' + x)),
    map(x => Math.random()),
    multicast(subjectFactory, function selector(shared) {
      const sharedDelayed = shared.pipe(
        delay(500),
        map(t => '2: '+t),
      );
      const merged = merge(shared, sharedDelayed);

      return merged;
    }),
  )
;

/*
// Old Rx version
const result = Observable.interval(1000).take(6)
               .do(x => log('source ' + x))
               .map(x => Math.random())
               .multicast(subjectFactory, function selector(shared) {
                 const sharedDelayed = shared.delay(500).map(t => '2: '+t);
                 const merged = shared.merge(sharedDelayed);
                 return merged;
               });
*/

const sub = result.subscribe(observerA);

