import { Fragment, useState, useEffect } from "react";
import Button from "../Button/button";
import "./counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      const intervalId = setInterval(() => {
        setCount(count + 1);
      }, 1000);

      // clearing the interval to avoid memory leaks
      return () => clearInterval(intervalId);
    }
  }, [count, active]);

  // Start the counter on click of start button
  const startCounter = () => {
    setActive(true);
  };

  // Pause the counter on click of pause button
  const pauseCounter = () => {
    setActive(false);
  };

  // Reset the counter on click of reset button
  const resetCounter = () => {
    setActive(false);
    setCount(0);
  };

  return (
    <Fragment>
      <div className="count">Counter : {count}</div>
      <Button
        color={active ? "green" : "blue"}
        name={active ? "pause" : "start"}
        onClick={active ? pauseCounter : startCounter}
      ></Button>
      <Button name="reset" color="red" onClick={resetCounter}></Button>
    </Fragment>
  );
};

export default Counter;
