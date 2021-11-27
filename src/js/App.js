import React from "react";
import { Provider } from "react-redux";

// Components
import Routes from "./Routes";

export default function App({ store }) {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
