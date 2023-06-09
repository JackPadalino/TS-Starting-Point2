import React from "react";
import App from "./components/App/App";
import Nav from "./components/Nav/Nav";
import store from "./store";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const container = document.querySelector("#root") as HTMLElement;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Nav />
      <App />
    </BrowserRouter>
  </Provider>
);
