import React, { useEffect, useState } from "react";

const Useeffect = () => {
  const [data, setData] = useState([]);

  //   Normal fetching of api in react gives uncontrolled re-render:
  /* fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => setData(data));
  console.log(data); */

  //   How does useEffect() executes?
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);

  return (
    <div>
      <h3>Use of Useeffect</h3>
      <p>
        All the hooks in react contains the name 'use'. Using useEffect u can
        control the following lifecycle & also control side effects i.e data
        load etc.
      </p>
      <ol>
        <li>mount/ render</li>
        <li>update/ re-render</li>
        <li>unmount</li>
      </ol>
      <h3>useEffect is two types. </h3>
      <ol>
        <li>useEffect from React</li>
        <li>Custom useEffect</li>
      </ol>
      <h5>
        Note: Normal fetching of api in react gives uncontrolled re-render. Here
        directly fetching data is applied in Component without using any hooks.
        Which results uncontrolled re-render. Commented out it and see in
        console. To solve this use useEffect with dependencies.
      </h5>
      <h3>How does useEffect() executes?</h3>
      <p>
        First, All the code in component runs with useState data showing an
        empty array in console.
      </p>
      <p>
        Second, After setValue it will update or re-render showing the value in
        console.
      </p>
    </div>
  );
};

export default Useeffect;
