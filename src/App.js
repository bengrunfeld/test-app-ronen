import React, { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState();

  // RONEN - This is how you make an API call from the browser
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) => setState(JSON.stringify(data)));
  }, []);

  return (
    <div className="App">
      <h1>Hi Ronen</h1>
      <p>Data: {state}</p>
    </div>
  );
}

export default App;
