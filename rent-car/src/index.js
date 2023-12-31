import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import { store } from "./redux/store";

import "modern-normalize/modern-normalize.css";
import "./index.css";
import "./styles/variables.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* // <React.StrictMode> */}
    {/* <Provider store={store}> */}
    <BrowserRouter basename="/RentCar">
      <App />
    </BrowserRouter>
    {/* </Provider> */}
    {/* </React.StrictMode> */}
  </>
);
