import { Component } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './app.module';
import { AppActions } from './app.actions';

// import { AppActions } from './app.actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'ng-redux';
    myCounter = 0;

    constructor(private ngRedux: NgRedux<IAppState>) {
    }

    /**
     * Click on counter link
     */
    clickLink() {
        this.myCounter++;
        this.ngRedux.dispatch(AppActions.test({counter: this.myCounter}));
    }
}
