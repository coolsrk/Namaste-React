import React from "react";
import { UserInfo } from "../UserInfo";
import { UserInfoClass } from "./UserInfo";

export class About extends React.Component {
  
  constructor(props){
    super(props);

    // this.state = {
    //     count : 1,
    // }
    // console.log('parent constructor rendered');
}

componentDidMount(){
  // console.log('parent componentDidMount called');
}

  render(){
    // console.log('parent render() rendered');

    return (
      <>
        <h1>About rendered</h1>
        {/* <UserInfo name={"Shreyas from function"} address="Parbhani from function"></UserInfo> */}
        <UserInfoClass></UserInfoClass>
      </>
    );
  }
};
