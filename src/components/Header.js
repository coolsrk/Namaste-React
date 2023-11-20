import { Link } from "react-router-dom";

export const HeaderComponent = () => (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={require("../logo.png")} />
      </div>
  
      <div className="nav-items">
        <ul>
          <li>
            <Link  to="/">Home</Link></li>
          <li><Link  to="/about">About Us</Link></li>
          <li><Link  to="/contact">Contact</Link></li>
          <li>Orders</li>
        </ul>
      </div>
    </div>
  );