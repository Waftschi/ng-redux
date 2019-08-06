import { AppActions } from './app.actions';
import { delay, mapTo } from 'rxjs/operators';
import { Injectable } from '@angular/core';


@Injectable()
export class SomeEpics {
    counter = 1;
    epicOne = (action$) => action$.ofType(AppActions.TEST).pipe(delay(2000), mapTo(AppActions.add({counter: this.counter})));
    epicTwo = (action$) => action$.ofType('ACTION_IN').pipe(mapTo({type: 'ACTION_OUT'}));
}
