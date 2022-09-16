function MyApp() {
  const [person, setPerson] = React.useState({
    fName: "Himagirish",
    lName: "N D",
  });

  function updateName() {
    setPerson({
      // in order to update refernce type first we need to copy the whole object otherwise  only the updated portion will be printed.
      ...person,
      fName: "Vaibhav",
    });
  }

  return (
    <div>
      <p>{person.fName}</p>
      <p>{person.lName}</p>
      <button
        onClick={() => {
          updateName();
        }}
      >
        click
      </button>
    </div>
  );
}

ReactDOM.render(<MyApp />, document.getElementById("container"));
