export const HeaderComponent = () => (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={require("../logo.png")} />
      </div>
  
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Orders</li>
        </ul>
      </div>
    </div>
  );