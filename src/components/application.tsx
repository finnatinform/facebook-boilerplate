import * as React from "react";

export interface IApplicationProps { }
export interface IApplicationState { }

export class ApplicationState implements IApplicationState { }

export class Application extends React.Component<IApplicationProps, IApplicationState> {
    render() {
        return (
            <div className="application">
            </div>
        );
    }
}