import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const m = 8;
  const n = 8;

  const [chess, setchess] = useState([]);
  useEffect(() => {
    const res = [];
    for (let i = 0; i < n; i++) {
      const row = Array.from({ length: m });
      res.push(row);
    }
    setchess(res);
  }, []);

  return (
    <div>
      {chess.length > 0 &&
        chess.map((row, rowid) => {
          return (
            <div className="row" key={rowid}>
              {row.map((_, colid) => {
                return (
                  <div
                    className={`box ${
                      (rowid + colid) % 2 === 0 ? "black" : "white"
                    }`}
                    key={colid}
                  ></div>
                );
              })}
            </div>
          );
        })}
    </div>
    // </div>
  );
}

export default App;
