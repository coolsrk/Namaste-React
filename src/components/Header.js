import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/hooks/useOnlineStatus";
import { useContext } from "react";
import { UserContext } from "../utils/contexts/UserContext";

export const HeaderComponent = () => {
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={require("../logo.png")} />
      </div>
  
      <div className="nav-items">
        <ul>
          <li>Online statue : {onlineStatus ? '✅' : '❌'}</li>
          <li>
            <Link  to="/">Home</Link></li>
          <li><Link  to="/about">About Us</Link></li>
          <li><Link  to="/contact">Contact</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li>Orders</li>
          <li>User: {loggedInUser}</li>
        </ul>
      </div>
    </div>
  )};