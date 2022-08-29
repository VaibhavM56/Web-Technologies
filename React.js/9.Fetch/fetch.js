class Fetch extends React.Component {
  state = {
    data: [],
  };

  fetchData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        return res.json();
      })
      .then((fetcheddata) => {
        // console.log(fetcheddata);
        this.setState({
          data: fetcheddata,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.fetchData();
          }}
        >
          Click
        </button>
        {this.state.data.map((value, ind) => {
          // return (
          //   <ul>
          //     <li>
          //       <h4 key={ind}>{value.title}</h4>
          //     </li>
          //   </ul>
          // );
          return <h4 key={ind}>{value.title}</h4>;
        })}
      </div>
    );
  }
}

ReactDOM.render(<Fetch />, document.getElementById("container"));
