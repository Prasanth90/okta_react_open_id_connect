import '../App.css';

export const LandingPage = () => {
    return (
      <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: "center", height: 'calc(80vh - 40px)'}}>
        <div style={{fontSize: 64, fontWeight: 200}}>Landing Page</div>
        <div style={{fontSize: 24, marginTop: 16, fontWeight: 200}}>Please login to contine</div>
      </div>
    )
}