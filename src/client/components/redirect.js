import React from "react";
import {Route, Switch, Redirect, useLocation} from "react-router-dom";
import {Hello} from "../components/hello";

function App() {
    const {pathname} = useLocation();

    return (
        <div className={"app-container bg-light"}>
            <div className={"container pt-4 pb-4"}>
                <Switch>
                    <Redirect from={"/:url*(/+)"} to={pathname.slice(0, -1)} />
                    <Route path={"/user/signup"} component={Hello} />
                    <Redirect from={"*"} to={"/"} />
                </Switch>
            </div>
        </div>
    );
}

export {App};
