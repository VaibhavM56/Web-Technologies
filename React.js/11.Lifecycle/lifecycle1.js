class Parent extends React.Component {
  componentDidMount() {
    console.log("parent componentDidMount");
  }

  constructor() {
    super();
    this.state = {
      name: "Prajwal",
      age: "23",
      show: true,
    };
    console.log("parent constructor executed");
  }

  render() {
    console.log("render method executed");
    return (
      <div>
        <h2>{this.state.name}</h2>
        <button
          onClick={() => {
            this.updateName("Vaibhav");
          }}
        >
          Change Name
        </button>
        <h2>{this.state.age}</h2>
        <button
          onClick={() => {
            this.updateAge("30");
          }}
        >
          Change Age
        </button>
      </div>
    );
  }

  updateName(changeName) {
    this.setState({
      name: changeName,
      show: false,
    });
  }

  updateAge(changeAge) {
    this.setState({
      age: changeAge,
      show: false,
    });
  }
}

ReactDOM.render(<Parent />, document.getElementById("container"));
