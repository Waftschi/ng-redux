// import { AppActions } from './app.actions';

import { AppActions } from './app.actions';

export const initialState: any = {
    todos: [],
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case AppActions.ADD:
            action.payload.counter++;
            return {
                todos: state.todos.concat(action.payload),
            };
        case AppActions.DONE:
            return {
                todos: state.todos.concat(action.payload),
            };
        default:
            return state;
    }
};

