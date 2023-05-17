// Entry point for the build script in your package.json
import "@hotwired/turbo-rails";
import "./controllers";
import * as bootstrap from "bootstrap";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./scss/index.scss";

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(<App />);
