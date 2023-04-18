import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const Title = () => (<h1 className="heading">Hello! This is heading from Title component</h1>);

// Funtctional Component
const HeadingComponent = () => (
    <>
    <Title></Title>
    <h1 className="heading">Hello! From HeadingComponent</h1>
    </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent/>);