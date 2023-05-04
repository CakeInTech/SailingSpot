// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"

import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app";


ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);
