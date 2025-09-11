import * as React from "react";
import mapper from "../context/mapper";

class About extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    componentDidMount(): void {
    }

    render(): React.ReactNode {
        const { TimerLabel } = this.props;
        console.log(`组件：`, TimerLabel);
        return <>
            <div style={{ textAlign: "center", background: "#888888" }}>
                <h2>关于</h2>
                <span color="yellow">
                    <TimerLabel />
                </span>
            </div>
        </>
    }
}
export default mapper(About);