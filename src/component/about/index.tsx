import * as React from "react";
import mapper from "../context/mapper";

class About extends React.Component<{ TimerLabel: React.ComponentClass }, {}> {

    constructor(props: any) {
        super(props);
    }

    componentDidMount(): void {
    }

    render(): React.ReactNode {
        const { TimerLabel } = this.props;
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
export default mapper("ABOUT", About);