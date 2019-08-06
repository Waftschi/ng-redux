import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createStore } from 'redux';
import { initialState, rootReducer } from './root.reducer';
import { DevToolsExtension, NgRedux, NgReduxModule } from '@angular-redux/store';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { SomeEpics } from './app.epics';
import { CounterComponent } from './counter/counter.component';

export const appStore = createStore(rootReducer);

export interface IAppState {
    todos: any[];
}


@NgModule({
    declarations: [
        AppComponent,
        CounterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgReduxModule,

    ],
    providers: [SomeEpics],
    bootstrap: [AppComponent]
})
export class AppModule {
    private __DEVMODE__ = true;


    constructor(
        private ngRedux: NgRedux<IAppState>,
        private devTools: DevToolsExtension, someEpics: SomeEpics) {

        const epics = combineEpics(
            someEpics.epicOne,
            someEpics.epicTwo
        );

        const epicMiddleware = createEpicMiddleware();

        let enhancers = [];
        // ... add whatever other enhancers you want.

        // // You probably only want to expose this tool in devMode.
        if (this.__DEVMODE__ && devTools.isEnabled()) {
            enhancers = [...enhancers, devTools.enhancer()];
        }

        this.ngRedux.configureStore(
            rootReducer,
            initialState,
            [epicMiddleware],
            enhancers);

        epicMiddleware.run(epics);

    }
}

