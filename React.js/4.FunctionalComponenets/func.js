//functional component

function Header(props) {
  return (
    <div>
      <h1>I am in header Component</h1>
      <img src={props.logo} />
      <h3>{props.brand}</h3>
    </div>
  );
}

function Content({ fName, lName }) {
  return (
    <div>
      <h1>This is content</h1>
      <h1>
        {fName} {lName}
      </h1>
    </div>
  );
}

function Footer(props) {
  let { carModel, carYear } = props;
  return (
    <div>
      <h1>This is Footer</h1>
      <h1>{carModel}</h1>
      <h2>{carYear}</h2>
    </div>
  );
}

ReactDOM.render(
  <div>
    <Header logo="logoImg.avif" brand="Lamborghini" />
    <Content fName="Vaibhav" lName="Mishra" />
    <Footer carModel="Aventador" carYear="2018" />
  </div>,
  document.getElementById("container")
);
