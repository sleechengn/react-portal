import * as React from "react";
import GlobalContext from "./context";

export default function (NAMES: string, C: React.ComponentClass) {
    return class P extends React.Component<any, any> {
        render(): React.ReactNode {
            return <>
                <GlobalContext.Consumer>
                    {
                        context => {
                            return <>
                                <C {...this.props} {...context} />
                            </>;
                        }
                    }
                </GlobalContext.Consumer>
            </>;
        }
    }
}