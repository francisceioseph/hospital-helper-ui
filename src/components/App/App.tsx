import React from "react";
import { BrowserRouter } from "react-router-dom";
import { RouterSwitch } from "../../config/RouterSwitch";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <RouterSwitch></RouterSwitch>
      </BrowserRouter>
    </div>
  );
}

export default App;
