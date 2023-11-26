import React from "react";

export class UserInfoClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: '',
        bio: '',
        login:''
      }
    };
    // console.log(this.props.name + "child constructor rendered");
  }

  async componentDidMount() {
    // console.log(this.props.name + "child componentDidMount called");
    const apiData = await fetch('https://api.github.com/users/coolsrk');
    const json = await apiData.json();

    const {login, name, bio} = json;
    this.setState({
      userInfo: {
        login, bio, name
      }
    });
  }

  render() {
    const { login, bio, name  } = this.state.userInfo;
    // console.log(this.props.name + "child render() rendered");
    return (
      <div className="user-info">
        <h1>Name:- {name}</h1>
        <h3>GitId:- {login}</h3>
        <h3>Bio:- {bio}</h3>
      </div>
    );
  }
}
