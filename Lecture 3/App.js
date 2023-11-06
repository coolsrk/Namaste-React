import React from "react";
import ReactDOM from "react-dom/client";

// React Element
// Bables tranpiles this JSX code to React.createElement
const Title = () => <h2 className="heading">Hello from React 🚀</h2>;
const heading = <h2>ElementInsideComponent</h2>;
// console.log(title);

// Components
// 1. Class based - older
// 2. Function based - newer

const ElementInsideComponent = () => (
  <h1>
    {heading}
    This is Element inside component.
  </h1>
);

const HeadingComponent = () => (
  <>
    <h1>
      <Title />
      This is functional component.
    </h1>
    <ElementInsideComponent />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
