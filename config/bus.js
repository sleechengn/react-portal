let taskCounter = 0;
let subscribes = [];

module.exports = {
    increment() {
        taskCounter++;
        for (let i = 0; i < subscribes.length; i++) {
            let subscribe = subscribes[i];
            subscribe(taskCounter);
        }
    },
    decrement() {
        taskCounter--;
        for (let i = 0; i < subscribes.length; i++) {
            let subscribe = subscribes[i];
            subscribe(taskCounter);
        }
    },
    subscribe(func) {
        subscribes.push(func);
        func(taskCounter);
    }
};