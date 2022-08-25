// tp create class component we should follow pascal case

//jsx rules
//if we have two or more elements, we have to wrap it inside the parenthesis
// if more than one element is there in the component then you have to wrap it inside parent element.
class Header extends React.Component {
  render() {
    console.log(this.props.firstName);
    console.log(this.props.lastName);
    return (
      <div>
        <div>
          <h1>I am a new Header</h1>
          <p>aagg i gaiia hg a iuagg iuug ga ougiaghguirawg</p>
        </div>
        <div>
          <h1>Hello {this.props.firstName}</h1>
        </div>
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello I am content page</h1>
        <h3>
          {this.props.pageDetail}
          {this.props.pageDetails2}
        </h3>
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return <h3>This is footer</h3>;
  }
}

ReactDOM.render(
  <div>
    <Header firstName="Vaibhav" lastName="Mishra" />
    <Content
      pageDetail="This part is all about the content."
      pageDetails2="This is the second part."
    />
    <Footer />
  </div>,
  document.getElementById("container")
);
