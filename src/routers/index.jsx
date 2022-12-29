import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { MAIN_URL } from "../constants";
import ProfileRouter from "./ProfileRouter";
import { Provider } from "react-redux";
import store from "../store";
import { messageReceived } from "../store/actions/message";

store.dispatch(
  messageReceived(
    "Сообщение которое получил пользователь",
    "Никакого имени",
    "12:00"
  )
);

const MainRouter = () => {
  return (
    <Switch>
    <Provider store={store}>
        <Route path={MAIN_URL.PROFILE} component={ProfileRouter} />
        <Redirect to={MAIN_URL.PROFILE} />
    </Provider>
    </Switch>
  );
};

export default MainRouter;
