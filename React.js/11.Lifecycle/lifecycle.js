class Parent extends React.Component {
  componentDidMount() {
    //this method will be executed for the first time mounting to real DOM
    //it is used to make side effects to the component
    //you can make api calls in this method
    //componentDidMount will be executed on successful mounting of real DOM
    console.log("parent componentDidMount executed");
  }

  constructor() {
    super();
    this.state = {
      text: "mounting phase",
      show: true,
    };
    console.log("parent constructor executed");
  }

  static getDerivedStateFromProps(props, state) {
    //1. it returns the state or if there is no change in the state then it will return null
    console.log("Parent getDerivedStateFromProps executed");
    return state;
  }

  // by default these methods will be executed in the background.

  render() {
    //in render method we should update anything or we should not
    //perform any side effects. because if we try to update anything
    //render method will go into infinite loop

    console.log("render method executed");
    return (
      <div>
        {this.props.age}
        <h1>{this.state.text}</h1>
        <button
          onClick={() => {
            this.updateText("updating Phase");
          }}
        >
          click
        </button>
        {this.state.show ? <Child /> : null}
      </div>
    );
  }

  updateText(text) {
    this.setState({
      text: text,
      show: false,
    });
  }

  shouldComponentUpdate() {
    console.log("Parent shouldComponentUpdate executed");
    return true; // if false update will not take place
  }

  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log("parent getSnapshotBeforeUpdate executed");
    return "scrolling position";
  }

  componentDidUpdate(prevProp, prevState, snapshot) {
    console.log("Parent componentDidUpdate executed");

    console.log("previous prop", prevProp);
    console.log("previous state", prevState);
    console.log("snapshot", snapshot);
  }
}

class Child extends React.Component {
  render() {
    return <div>chold component</div>;
  }
  componentWillUnmount() {
    console.log("child componentWillUnmount executed");
  }
}

ReactDOM.render(<Parent age="23" />, document.getElementById("container"));
