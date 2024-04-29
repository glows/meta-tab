import React from "react";
import ReactDOM from "react-dom/client";
// import "../index.css"; //commented to prevent tailwind styles leaking into the webpage
// but if you want to use tailwind in content app, import the index.css file
import './newTab.css'
import NewTabApp from "./NewTabApp";

const root = document.createElement("div");
root.id = "crx-root";
document.body.appendChild(root);

console.log('hello world from content script');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <NewTabApp />
  </React.StrictMode>
);
