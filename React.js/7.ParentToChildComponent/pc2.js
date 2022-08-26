function Parent() {
  let data = ["Chocolate", "Mango", "Apple", "Strawberry", "Banana"];

  let data2 = [
    { firstName: "Megha", lName: "T A", ph: 234567890 },
    { firstName: "Nayana", lName: "S R", ph: 234569870 },
    { firstName: "Avi", lName: "Palerya", ph: 234569870 },
    { firstName: "Namana", lName: "Jain", ph: 234569870 },
  ];
  return (
    <div>
      <h1>Welcome to Parent</h1>
      <Child data={data} data2={data2} />
    </div>
  );
}

function Child(props) {
  console.log(props.data);
  return (
    <div>
      <h1>Welcome to child component</h1>
      <h3>For data</h3>
      {props.data.map((value, ind) => {
        return <p key={ind}>{value}</p>;
      })}
      <h3>For data2</h3>
      {props.data2.map((value, ind) => {
        return <p key={ind}>{value.firstName}</p>;
      })}
    </div>
  );
}

ReactDOM.render(<Parent />, document.getElementById("container"));
