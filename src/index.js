import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CommentLists from "./chapter_5/CommentLists";
import NotificationList from "./chapter_6/NotificationList";
import RefExample from "./chapter_7/RefExample";
import Accomodate from "./chapter_7/Accomodate";

import ConfirmButton from "./chpater_8/ConfirmButton";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConfirmButton />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
