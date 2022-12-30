import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { MAIN_URL } from "../constants";
import ProfileRouter from "./ProfileRouter";
import { Provider } from "react-redux";
import store from "../store";
import { messageReceived } from "../store/actions/message";

store.dispatch(
  messageReceived(
    " 1 Aute ea et pariatur ad aliquip voluptate reprehenderit incididunt id. Cupidatat deserunt mollit incididunt reprehenderit culpa. Laborum est in fugiat commodo et. Ipsum nulla ipsum est exercitation quis esse cillum sint commodo.",
    "Dr. Virginia Wehner",
  )
);

store.dispatch(
  messageReceived(
    "2 Culpa ea in est",
    "Me",
  )
);

store.dispatch(
  messageReceived(
    " 3 Duis amet id reprehenderit voluptate duis.",
    "Dr. Virginia Wehner",
  )
);

store.dispatch(
  messageReceived(
    " 4 Qui excepteur dolore ad nulla duis aliqua laborum nostrud nisi.",
    "Me",
  )
);

store.dispatch(
  messageReceived(
    "5 Duis amet id reprehenderit voluptate duis.",
    "Dr. Virginia Wehner",
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
