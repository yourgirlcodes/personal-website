import React, {useState} from "react";
import "./App.css";
import Header from "./Header";
import Landing from './Landing';
import MyStory from './MyStory';
function App() {

  const [width, setWidth] = React.useState(window.innerWidth);
  
  /* add an event listener that updates
    the "width" state variable when the window size changes */
  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <div className="App">
      <Header width={width} />
      <Landing width={width}/>
      <MyStory width={width} />
    </div>
  );
}

export default App;
