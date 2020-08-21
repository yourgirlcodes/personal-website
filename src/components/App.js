import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Hamburger from "./Hamburger";
import Landing from "./Landing";
import MyStory from "./MyStory";
import YourGirlCodes from "./YourGirlCodes";
import Footer from './Footer';
import Projects from './Projects'

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [scrollDir, setScrollDir] = useState("down");

  /* add an event listener that updates
    the "width" state when the window size changes - so there is no lag */
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  /* Want to check the scrolling, for animation of the heading "...alias YourGirlCodes" */
  /* offsets are always calculated from the TOP DOWN */

  useEffect(() => {
    const threshold = 0; /* we defining after 'how many' scrolls, we want to run the calc 
                            - this is at the first scroll */
    let lastScrollY = window.pageYOffset; /* how many px document is scrolled now rel to window - 
                                            use this as reference in future calc to see direction */
    let ticking = false; /* just flagging for the sake of checking */

    const updateScrollDir = () => {
      const scrollY =
        window.pageYOffset; /* once we scrolling, this is the current offset */

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        /* have we hit the threshold? */
        ticking = false;
        return; /* no, so we wait until we do */
      }

      /* when we do hit threshold, we define direction */
      /* if current offset is bigger than orig, we scrolling down the page */
      setScrollDir(scrollY > lastScrollY ? "scrollingDown" : "scrollingUp");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        /* we call this function when we want to update the animation on screen, 
        so it fires and takes a callback as an argument 
        - and we start the story again */

        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll); /* clean up */
  }, []);

  const breakpoint = 900;
  return (
    <div className="App">

      {/* <Landing width={width} />
      <YourGirlCodes width={width} scrollDir={scrollDir} />
      <MyStory width={width} /> */}
      <BrowserRouter>
      {(width >= breakpoint) ? 
      <Header width={width} />
      :
      <Hamburger width={width} />
      }

        <Switch>
          <Route
          exact
            path="/"
            render={props => <Landing {...props} width={width} />}
          />
          <Route
            path="/yourgirlcodes"
            render={props => <YourGirlCodes {...props} width={width} />}
          />
          <Route
            path="/me"
            render={props => <MyStory {...props} />}
            width={width}
          />
           <Route
            path="/dev"
            render={props => <Projects {...props} />}
            width={width}
          />
        </Switch>
      </BrowserRouter>
      <Footer width={width} />
    </div>
  );
}

export default App;
