import { useState } from "react";
import "./App.css";
import { List } from "./components/List";

function App() {
  const [search, setSearch] = useState("");
  const [matchType, setMatchType] = useState<"prefix" | "suffix" | "pattern">(
    "prefix"
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wordle dictonary</h1>
        <p style={{fontSize: '0.6em'}}>Source code is available on <a href='https://vercel.com/hina/wordle-dic' className="App-link">GitHub</a>.</p>
      </header>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          action="#"
          method="GET"
        >
          <input
            type="text"
            placeholder="Search"
            value={search}
            maxLength={5}
            pattern="^[a-zA-Z.?]{0,5}$"
            onInput={(e) => {
              setSearch(e.currentTarget.value);
            }}
          />
          <div>
            <label>
              <input
                type="radio"
                value={"prefix"}
                checked={matchType === "prefix"}
                onChange={(e) =>
                  setMatchType(e.currentTarget.value as typeof matchType)
                }
              />
              Prefix
            </label>
            <label>
              <input
                type="radio"
                value={"suffix"}
                checked={matchType === "suffix"}
                onChange={(e) =>
                  setMatchType(e.currentTarget.value as typeof matchType)
                }
              />
              Suffix
            </label>
            <label>
              <input
                type="radio"
                value={"pattern"}
                checked={matchType === "pattern"}
                onChange={(e) =>
                  setMatchType(e.currentTarget.value as typeof matchType)
                }
              />
              Pattern (<code>.</code>, <code>?</code>, <code>*</code> as wildcard, required 5chars)
            </label>
          </div>
          <input type="submit" value="Search" style={{ display: " none" }} />
        </form>
        <div>
          <List search={search} matchType={matchType} />
        </div>
      </div>
    </div>
  );
}

export default App;
