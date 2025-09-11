import * as React from "react";

class TimerLabel extends React.Component<{}, {}> {
    state: any = {
        time: undefined
    };
    timer: any = undefined;
    getTime() {
        let date = new Date();
        return `${date.getFullYear()}年${date.getMonth()}月${date.getDay()}日${date.getHours()}时${date.getMinutes()}分${date.getSeconds()}秒`;
    }

    componentDidMount(): void {
        this.timer = setInterval(() => {
            this.setState({ time: this.getTime() });
        }, 1000);
    }
    componentWillUnmount(): void {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }
    render(): React.ReactNode {
        return <>{this.state.time}</>
    }
}

export { TimerLabel };