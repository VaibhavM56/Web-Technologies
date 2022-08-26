class Parent extends React.Component {
  state = {
    text: "",
  };

  getDataFromChild(childData) {
    console.log(childData);
    this.setState(
      {
        text: childData,
      },
      () => {
        console.log(this.state);
      }
    );
  }
  render() {
    return (
      <div>
        <h1>This is parent component</h1>
        <h1>{this.state.text}</h1>
        <Child callback={this.getDataFromChild.bind(this)} />
      </div>
    );
  }
}

class Child extends React.Component {
  render() {
    const str = "I am precious data";
    return (
      <div>
        <h1>This is child component</h1>
        <button
          onClick={() => {
            this.props.callback(str);
          }}
        >
          send data from child component
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Parent />, document.getElementById("container"));
