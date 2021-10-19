import React from "react";
interface IProps {
  people: {
    url: string;
    age: number;
    name: string;
    note?: string;
  }[];
}
class brandPage extends React.Component {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main-container">
        <div className="App container">
          <h2>People invited to my party</h2>
          <input
            type="text"
            id="input"
            className="form-control mb-3 input"
            placeholder="brand name"
          ></input>
          <input
            type="number"
            maxLength={10}
            id="input"
            className="form-control input"
            placeholder="brand price"
          ></input>
          <hr></hr>
        </div>
      </div>
    );
  }
}
export default brandPage;
