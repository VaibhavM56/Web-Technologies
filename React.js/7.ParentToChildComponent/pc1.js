//passing the data from parent to child

function App(props) {
  let name = "Akshatha";
  return (
    <div>
      <h1>Name: {props.loggedInUser}</h1>
      <Home appName="Netflix" user={name} />
      {/* //  child component of app */}
    </div>
  );
}

function Home(props) {
  return (
    <div>
      <h1>Welcome {props.user}</h1>
    </div>
  );
}

ReactDOM.render(
  <App loggedInUser="Vaibhav" />,
  document.getElementById("container")
);
