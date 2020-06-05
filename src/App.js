import React, { useEffect, useState } from "react";
import Axios from "axios";
function App() {
  const [data, setData] = useState();
  useEffect(async () => {
    const data = await Axios.get("/api");
    console.log(data.data);
    setData(data.data);
  }, []);
  return (
    <div className="App">
      HELLO FROM REACT
      <p>{data}</p>
    </div>
  );
}

export default App;
