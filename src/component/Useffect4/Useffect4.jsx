import React, { useEffect, useState } from "react";

const Useffect4 = () => {
  /* Example */
  const [value, setValue] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("interval");
    }, 1000);
    return () => {
      console.log("unmount");
      clearInterval(intervalId);
    };
  }, [value]);
  return (
    <div>
      <p>{value}</p>
      <h3>Controlling react Lifecycle using useEffect with dependencies</h3>
      <p>We know component lifecycle is following:</p>
      <ol>
        <li>mount/ render -- []</li>
        <li>update/ re-render -- [state, state2]</li>
        <li>unmount</li>
      </ol>
      <p>rerender undergoes = 1.unmount ==> 2.update ==> 3.mount </p>
      <p>
        Note: From upper lifecycle, we see that for first time mount/ render we
        pass [] in dependency. For update/ re-render which state should be use
        passes that states in dependency. But in case of unmount there is no
        dependencies. It is controlled by using return function. An example is
        made using setInterval. We set a setInterval function in component. Now
        when commented the component from app.jsx the result inside the
        setinterval function do not stop rerender after closing or commented the
        component. To stop this auto rerender use clearinterval. For this assign
        the setinterval in a variable and pass the variable in clearinterval.
        Now unmount or commented the component the interval stopped.
      </p>
    </div>
  );
};

export default Useffect4;
