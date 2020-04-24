import React from "react";
import { BrowserRouter } from "react-router-dom";
import { RouterSwitch } from "../config/RouterSwitch";

function App() {
  return (
    <BrowserRouter>
      <RouterSwitch></RouterSwitch>
    </BrowserRouter>
  );
}

export default App;
