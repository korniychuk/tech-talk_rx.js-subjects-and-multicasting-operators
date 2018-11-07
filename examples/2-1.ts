import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { PartialObserver } from 'rxjs';

import { observerA, observerB, observerC, observerD } from './common.inc';

/**
 * Subject: an Observable and Observer hybrid
 *
 * -^-a-b-c-d|
 * ----^b-c-d|
 */

const observable = interval(1000).pipe(take(5));

class BridgeObserver {
  private observers: Array<PartialObserver<any>> = [];

  next(v) {
    this.observers.forEach(o => o.next(v));
  }

  error(v) {
    this.observers.forEach(o => o.error(v));
  }

  complete() {
    this.observers.forEach(o => o.complete());
  }

  addObserver(observer: PartialObserver<any>) {
    this.observers.push(observer);
  }
}

const bridge = new BridgeObserver();


bridge.addObserver(observerA);

observable.subscribe(bridge); // create an execution

setTimeout(() => {
  bridge.addObserver(observerB);
}, 3000);
