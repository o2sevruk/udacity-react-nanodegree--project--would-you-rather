import React from "react";
import ReactDOM from "react-dom";

// Plugins
import "../scss/index.scss";

// Settings
import store from "./store";

// Components
import App from "./App";

ReactDOM.render(<App store={store} />, document.getElementById("app"));
