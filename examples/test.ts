import { log, observerA, observerB, observerC, observerD } from './common.inc';

import { catchError } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { empty } from 'rxjs';

const a = new Subject();

a.error(new Error('asdf'));

const b = a.pipe(
  catchError((err) => {
    return empty();
  }),
);

b.subscribe(observerA);
