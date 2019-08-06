import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../app.module';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

    @select(state => state.todos[0] ? state.todos[0].counter : 0) counter: Observable;


    constructor(private ngRedux: NgRedux<IAppState>) {
    }

    ngOnInit() {
    }
}
