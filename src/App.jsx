import questradeLogo from "./assets/Questrade_logo.svg";
import "./App.css";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  console.log(location.hash);
  return (
    <>
      <div>
        <a href="https://questrade.com/" target="_blank">
          <img src={questradeLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>An App for Questrade Auth test</h1>
      <a
        href={`https://login.questrade.com/oauth2/authorize?client_id=XKRGO8yuCQDGqczbx2onhTu9qEj4oA&response_type=token&redirect_uri=${window.location.href}`}
        target="_blank"
      >
        <button className="btn">Test</button>
      </a>
    </>
  );
}
export default App;
