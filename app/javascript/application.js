// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import "jquery"
import "./scss/index.scss"

import React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from './reducer/store/configureStore';
import App from "./components/App";


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
