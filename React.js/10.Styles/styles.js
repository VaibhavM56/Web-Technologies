function Greet() {
  const myStyle = { backgroundColor: "pink" };
  return (
    <div>
      <h1 style={{ backgroundColor: "red", color: "blue", fontSize: "10px" }}>
        Hello React
      </h1>
      <h2 style={myStyle}>This is h2 element</h2>

      <div className="main">
        <div className="d1"></div>
        <div className="d2"></div>
      </div>

      <br />
      <br />

      <div className="main1">
        <div className="d3">
          <div className="c1"></div>
          <div className="c2"></div>
        </div>
        <div className="d4">
          <div className="c3"></div>
          <div className="c4"></div>
        </div>
      </div>

      <br />
      <br />

      <div className="main2">
        <div className="d5">
          <div className="c5"></div>
          <div className="c6"></div>
        </div>
        <div className="d6">
          <div className="c7"></div>
          <div className="c8"></div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Greet />, document.getElementById("container"));
