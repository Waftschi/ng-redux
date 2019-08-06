// export const appActionTest = {type: 'TEST'};


export class AppActions {
    public static ADD = 'ADD';
    public static DONE = 'DONE';
    public static TEST = 'TEST';


    public static add(payLoad) {
        return {type: AppActions.ADD, payload: payLoad};
    }

    public static done(payLoad) {
        return {type: AppActions.DONE};
    }

    public static test(payLoad) {
        return {type: AppActions.TEST, payload: payLoad};
    }
}
