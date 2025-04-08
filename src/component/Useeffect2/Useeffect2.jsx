import React, { useEffect, useState } from "react";

const Useeffect2 = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <div>
      <h3>Another working concept of useEffect(): Re-render upon condition</h3>
      <p>
        In upper concept we use empty array in dependencies for render onetime.
        But sometimes it needs to re-render upon condition. So my condition is
        re-render upon change of value. That's why pass the value in
        dependencies and see in console the value upon changed i.e প্রথমবার
        render এ একবার call হবে। এরপর value change হওয়ার পর আবারও call হবে। But
        if you use empty array in dependencies the changed value is not shown.
        It shows 0. i.e শুধুমাত্র একবার call হবে তাই প্রথম call হওয়া value 0
        দেখাচ্ছে।
      </p>
      <p>Changed Value: {value}</p>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Click
      </button>
    </div>
  );
};

export default Useeffect2;
