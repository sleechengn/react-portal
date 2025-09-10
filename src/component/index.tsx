import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class Index extends React.Component {

    render(): React.ReactNode {
        return <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<div>首页</div>}></Route>
                    <Route path="/about" element={<div>静态网站模板</div>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    }

}