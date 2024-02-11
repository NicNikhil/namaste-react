/*const heading = React.createElement("h1",
    { id: "heading", xyz: "abc" },
    "Hello World from React!");

    console.log(heading); //object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);//converting object into h1 tag
*/
/**
 * 
 * <div id="parent">
 *    <div id="child">
 *       <h1>I'm H1 tag</h1>
 *    </div>
 * </div>
 * 
 * ReactElement(object) => HTML(BROWSER UNDERSTAND)
 * 
 */

//how to create nested div in react

const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "I'm h1 tag"), React.createElement("h2", {}, "I'm h2 tag")]));


console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);