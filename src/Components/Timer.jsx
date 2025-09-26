import React, { useEffect, useState } from "react";

const Timeout = () => {
  const [timer, setTimer] = useState(0);
  const [run, setRun] = useState(false);

  useEffect(() => {
    let interval;
    if (run) {
      interval = setInterval(() => {
        setTimer((prevtime) => prevtime + 10);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [run]);
  return (
    <>
      <h1>Set Your Timer</h1>
      <div>
        <span>{("0" + (Math.floor(timer / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + (Math.floor(timer / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + (Math.floor(timer / 10) % 100)).slice(-2)}</span>
      </div>

      {run ? (
        <button onClick={() => setRun(false)}>stop</button>
      ) : (
        <button onClick={() => setRun(true)}>start</button>
      )}
      <button onClick={() => setTimer(0)}>reset</button>
    </>
  );
};

export default Timeout;
