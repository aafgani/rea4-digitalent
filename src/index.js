import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GithubProvider } from "./contexts/GithubProvider";
import Todo from "./containers/ToDo";
import GithubRepo from "./containers/GithubRepo";
import Counter from "./containers/Counter";
import { legacy_createStore as createStore } from "redux";
import { initialValue, rootReducer } from "./reducers/rootReducer";
import { Provider } from "react-redux";

const store = createStore(rootReducer, initialValue);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GithubProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/todo" element={<Todo />} />
            <Route path="/github" element={<GithubRepo />} />
            <Route path="/counter" element={<Counter />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GithubProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
