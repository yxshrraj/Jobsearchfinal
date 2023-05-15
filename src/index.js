import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import "./index.css";
import App from "./App";


ReactDOM.render(
   < Auth0Provider 
   domain="dev-xx2huep7fzqu5v02.us.auth0.com"
    clientId="SEjInyx6J351VeVMhAmszEOnsVYibkd6"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
      <App />
</Auth0Provider>,

 document.getElementById("root")
 );
