import { useOktaAuth } from '@okta/okta-react';

export const Dashboard = () => {
    const { authState, oktaAuth } = useOktaAuth();

    return (
      <div style={{display: 'flex', alignItems: 'center', justifyContent: "center", height: 'calc(80vh - 40px)'}}>
        <div style={{fontSize: 64, fontWeight: 200}}>
            Hello {authState?.idToken?.claims['name']}
        </div>
      </div>
    )
}