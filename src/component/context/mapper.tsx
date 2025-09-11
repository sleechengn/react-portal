import * as React from "react";
import GlobalContext from "./context";

export default function (RComponent: any) {
    return class VComponent extends React.Component<any, any> {
        render(): React.ReactNode {
            return <>
                <GlobalContext.Consumer>
                    {
                        context => {
                            return <>
                                <RComponent {...this.props} {...context} />
                            </>;
                        }
                    }
                </GlobalContext.Consumer>
            </>;
        }
    }
}