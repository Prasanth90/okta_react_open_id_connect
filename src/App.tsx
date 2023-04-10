import { Route, Routes, useNavigate } from "react-router-dom";
import { Security } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { LandingPage } from "./pages/LandingPage";
import { Header } from "./components/Header";
import { Dashboard } from "./pages/Dashboard";
import { LoginCallback } from '@okta/okta-react';
import { RequiredAuth } from "./components/SecureRoute";

const REDIRECT_URI = `${window.location.origin}${process.env.REACT_APP_CALLBACK_PATH}`;

const config = {
  issuer: process.env.REACT_APP_ISSUER,
  clientId: process.env.REACT_APP_CLIENT_ID,
  redirectUri: REDIRECT_URI,
  scopes: ['openid', 'profile', 'email'],
};

const oktaAuth = new OktaAuth(config);

const App = () => {
  const navigate = useNavigate();
  const restoreOriginalUri = (_oktaAuth : any,  originalUri : any) => {
    const navigationUrl = toRelativeUrl(originalUri || '/', window.location.origin);
    console.log(originalUri, "Original Uri", navigationUrl);
    navigate(navigationUrl);
  };
  return (
    <Security restoreOriginalUri={restoreOriginalUri} oktaAuth={oktaAuth}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="login/callback"  element={<LoginCallback loadingElement={<div>Loading...</div>}/>} />
          <Route path="/dashboard" element={<RequiredAuth/>}>
            <Route path="" element={<Dashboard/>}/>
          </Route>
        </Routes>
      </main>
    </Security>
  );
};

export default App;
