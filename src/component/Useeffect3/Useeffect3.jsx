import React, { useEffect, useState } from "react";

const Useeffect3 = () => {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);

  useEffect(() => {
    console.log(value);
    console.log(value2);
  }, [value, value2]);

  return (
    <div>
      <h3>Change of Multiple state passing Multiple dependencies</h3>
      <p>
        যদি কোন execution Multiple state change এর উপর depend করে সেক্ষেত্রে
        Multiple value dependency তে pass করতে হবে। এখানে value এবং value2 দুইটা
        value ই state change এর সাথে আমাদের প্রয়োজন তাই তা dependency তে দুইটা
        value ই pass করা হয়েছে।
      </p>
      <h4>
        Value: {value}, Value2: {value2}
      </h4>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setValue2(value2 + 1);
        }}
      >
        Increment2
      </button>
    </div>
  );
};

export default Useeffect3;
