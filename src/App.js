import logo from "./logo.svg";
import "./App.css";
import { createClient } from "urql";
import { useEffect } from "react";

const apiKey = process.env.REACT_APP_API_KEY;
const URL = `https://gateway.thegraph.com/api/${apiKey}/subgraphs/id/FDD65maya4xVfPnCjSgDRBz6UBWKAcmGtgY6BmUueJCg`;

const query = `
{
  protocols(first: 5) {
    id
    inflation
    inflationChange
    maxEarningsClaimsRounds
  }
  transcoders(first: 5) {
    id
    activationRound
    deactivationRound
    lastActiveStakeUpdateRound
  }
}
`;

const client = createClient({ url: URL });

function App() {
  async function fetchData() {
    const response = await client.query(query).toPromise();
    console.log(response);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
