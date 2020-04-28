import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { RouterSwitch } from "../../config/RouterSwitch";
import { store } from "../../redux/store";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <BrowserRouter>
          <RouterSwitch></RouterSwitch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
