import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as config from "../../config/config.js";

const GContext = React.createContext<any>(null);
console.log(config.base);

export default class Index extends React.Component {

    render(): React.ReactNode {
        return <>
            <GContext.Provider value={
                class Dynamic extends React.Component<{}, {}> {
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
            }>
                <BrowserRouter>
                    <Routes>
                        <Route path={`${config.routeBase}`} element={<div style={{ background: "#cccccc", textAlign: "center" }}>
                            <GContext.Consumer>{VComponent => {
                                return <>
                                    <h2>首页</h2>
                                    <span color="yellow"><VComponent /></span>
                                </>
                            }}</GContext.Consumer>
                        </div>} />
                        <Route path={`${config.routeBase}/about`} element={<div style={{ background: "#cccccc", textAlign: "center" }}>
                            <GContext.Consumer>{VComponent => {
                                return <>
                                    <h2>静态网站模板</h2>
                                    <span color="yellow"><VComponent /></span>
                                </>
                            }}</GContext.Consumer>
                        </div>} />
                    </Routes>
                </BrowserRouter>
            </GContext.Provider>
        </>
    }

}