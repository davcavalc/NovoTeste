import React, { useState, useEffect } from "react";


function App() {
  const [time, setTime] = useState(1500);
const [isRunning, setIsRunning] = useState(false);

useEffect(() => {
  let intervalId;
  if (isRunning) {
    intervalId = setInterval(() => {
      setTime(prevTime => prevTime - 1);
    }, 1000);
  } else {
    clearInterval(intervalId);
  }
  return () => clearInterval(intervalId);
}, [isRunning]);

const handleStart = () => {
  setIsRunning(true);
};

const handlePause = () => {
  setIsRunning(false);
};

const handleReset = () => {
  setTime(1500);
  setIsRunning(false);
};

const minutes = Math.floor(time / 60);
const seconds = time % 60;

  return (
    <>
    <div className="bg-gray-900 text-white text-center h-screen flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-6">Timer de Pomodoro</h1>
      <div id="display" className="text-5xl font-bold mb-6">{time}</div>
      <div className="flex justify-around w-full md:w-1/2">
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        <button id="start-button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-2" onClick={handleStart}>Iniciar</button>
        <button id="pause-button" className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full mx-2" onClick={handlePause}>Pausar</button>
        <button id="reset-button" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mx-2" onClick={handleReset}>Reiniciar</button>
      </div>
    </div>
  </>
  );
}

export default App;
