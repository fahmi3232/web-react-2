import React, { Component } from "react";

export default class LifecycleComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      i: "",
      name: "",
      u: "",
      e: "",
      isUpdate: false
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/7")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          i: json.id,
          name: json.name,
          u: json.username,
          e: json.email,
        });
      });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      body: JSON.stringify({
        id: 1,
        name: this.state.name
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          isUpdate: true
        })
      });
  };

  componentDidUpdate() {
    const { isUpdate } = this.state;
    if(isUpdate){
      alert('Nama berhasil diupdate')
      this.state.name = ""
      this.setState({
        isUpdate : false
      })
    }
  }
  
  componentWillUnmount() {
    console.log("Componen di copot")
  }

  render() {
    return (
      <div style={{ padding: 20 }}>
        <h3>Id: {this.state.i}</h3>
        <h3>Nama: {this.state.n}</h3>
        <h3>Username: {this.state.u}</h3>
        <h3>Email: {this.state.e}</h3>
        <hr />
        <br />
        <h3>Update Nama: {this.state.name}</h3>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input
            type="text"
            name="name"
            placeholder="Change Name"
            onChange={(event) => this.setState({ name: event.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
