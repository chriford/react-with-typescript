import * as React from "react";
import "./App.css";
import brandPage from "./components/brandPage";

function App() {
  const [register, setRegister] = React.useState([]);
  const axios = require("axios");
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response: any) => {
      setRegister(response.data);
    })
    .catch((error: any) => {
      console.log("some error came up! Check your code properly.");
    });
  return (
    <div className="main-container">
      <h2 id="h2">People invited to my party</h2>
      <hr></hr>
      {register.map((register: any) => {
        return (
          <div className="line01">
            <div className={`container`}>
              <div
                style={{
                  padding: "1em",
                  backgroundColor: "rgba(0.9,10,20,.7)",
                  borderColor: "dodgerblue",
                  borderWidth: "2px",
                }}
                className="card"
              >
                <div key={register.id}>
                  <h2>
                    <span id="span">@</span>
                    {register.name}
                  </h2>
                  <button type="button" className="btn btn-danger">
                    Delete
                  </button>
                  <h2>
                    <span id="span">@</span>
                    {register.email}
                  </h2>
                  <button className="btn btn-primary mb-3">update</button>
                  <h2>
                    <span id="span">@</span>
                    {register.address.city}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
