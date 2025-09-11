import * as React from "react";
import GlobalContext from "./context/context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as config from "../../config/config.js";
import * as bus from "../../config/bus.js";
import { TimerLabel } from "./fragment/TimerLabel";
import About from "./about";


console.log(config.base);

export default class Index extends React.Component {

    render(): React.ReactNode {
        return <>
            <GlobalContext.Provider value={
                {
                    bus,
                    TimerLabel,
                }
            }>
                <BrowserRouter>
                    <Routes>
                        <Route path={`${config.routeBase}`} element={<div style={{ background: "#cccccc", textAlign: "center" }}>
                            <GlobalContext.Consumer>{VComponent => {
                                return <>
                                    <h2>首页</h2>
                                    <span color="yellow"><VComponent.TimerLabel /></span>
                                </>
                            }}</GlobalContext.Consumer>
                        </div>} />
                        <Route path={`${config.routeBase}/about`} element={<About/>} />
                    </Routes>
                </BrowserRouter>
            </GlobalContext.Provider>
        </>
    }

}