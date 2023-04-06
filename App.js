const heading = React.createElement("div", {id: "parent"},
[React.createElement("h1", {id: 'child1'}, "Its h1 tag"), 
React.createElement("h2", {id: "child2"} , "Its the h2.")]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);