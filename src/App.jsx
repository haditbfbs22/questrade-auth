import questradeLogo from "./assets/Questrade_logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://questrade.com/" target="_blank">
          <img src={questradeLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>An App for Questrade Auth test</h1>
    </>
  );
}

export default App;
