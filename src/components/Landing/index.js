import React, {useState, useEffect} from "react";
import "./Landing.css";

function Landing({ width }) {
  const breakpoint = 800;
const [isTranslate, setTranslate] = useState('')

useEffect(()=> {

//translate letter Z 4s after page loads, then return back to normal
const translate1 = setTimeout(()=> setTranslate("rotate-Z"), 3000)
const translate2 = setTimeout(()=> setTranslate(""), 3500)

//clear these timeouts when component unMounts (clean-up)
return ()=> {
  clearTimeout(translate1);
  clearTimeout(translate2);
}
//pass empty array so that the useEffect only runs once
}, [])

  return (
    <div className="landing">
      <div>
        <div className="second-images-container">
          {width >= breakpoint ? (
            <div>
              <br />
            I am <br /><div className='zoe'><div className={`${isTranslate}`}>Z</div>oë.</div>
              <div id="full-stack-big">
                just a really passionate full-stack developer
            </div>
            </div>

          ) : (
            <div>
              <br /> 
              <br />
              <div>Zoë.</div>
              <div id="full-stack-small">passionate full-stack developer</div>
            </div>
          )}
        </div>
      </div>
      <div className="images-container" />
    </div>
  );
}

export default Landing;
