import React, {} from "react";
import {Route, Switch, Redirect} from 'react-router-dom';
import {MAIN_URL} from "../constants";
import ProfileRouter from "./ProfileRouter";


const MainRouter = () => {

        return <Switch>
            <Route path={MAIN_URL.PROFILE} component={ProfileRouter}/>
            <Redirect to={MAIN_URL.PROFILE}/>
        </Switch>
};


export default MainRouter;
