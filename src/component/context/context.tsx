import * as React from "react";
export type ContextV = {
    bus?: any,
    TimerLabel?: any
};
const GlobalContext = React.createContext<ContextV>({});
export default GlobalContext;