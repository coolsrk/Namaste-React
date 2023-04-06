const heading = React.createElement("div", {
        id: "parent"
    },
    [React.createElement("div", {
        id: 'parent1'
    }, [React.createElement("h1", {
        id: "child1"
    }, "Its the h1."), React.createElement("h2", {
        id: "child2"
    }, "Its the h2.")]), 
    React.createElement("div", {
        id: 'parent2'
    }, [React.createElement("h1", {
        id: "child1"
    }, "Its the second h1."), React.createElement("h2", {
        id: "child2"
    }, "Its the second h2.")]),
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);