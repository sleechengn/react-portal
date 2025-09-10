import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const GContext = React.createContext<any>({});

export default class Index extends React.Component {

    render(): React.ReactNode {
        return <>
            <GContext.Provider value={{}}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<div>首页</div>} />
                        <Route path="/about" element={<div>静态网站模板</div>} />
                    </Routes>
                </BrowserRouter>
                <>
                    <GContext.Consumer>
                        {value => {
                            console.log(`context: ${value}`);
                            return <></>
                        }}
                    </GContext.Consumer>
                </>
            </GContext.Provider>
        </>
    }

}