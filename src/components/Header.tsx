import { useOktaAuth } from "@okta/okta-react";

export const Header = () => {
  const { authState, oktaAuth } = useOktaAuth();

  const loginWithRedirect = () => oktaAuth.signInWithRedirect({ originalUri: "/dashboard" });
  const logOut = () => oktaAuth.signOut();

  const btnCallback = authState?.isAuthenticated ? logOut : loginWithRedirect;

  console.log(authState, "Auth State");

  return (
    <div style={{background: 'teal'}}> 
      <div style={{height: 60, display: "flex", alignItems: 'center',  paddingLeft: 16, paddingRight: 16}}>
        <div style={{ flexGrow: 1, color: 'white', fontSize: 24, fontWeight: 200}} >Okta Sample (Reat 17)</div>
        <button style={{ padding: 8}} onClick={btnCallback}>
          {authState?.isAuthenticated ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
}