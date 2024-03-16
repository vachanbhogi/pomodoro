import React, { useEffect, useState } from 'react';

function App() {
  const [time, setTime] = useState<number>(25 * 60);
  const [timer, setTimer] = useState<Boolean | null>(null);

  useEffect(() => {
    if (timer){
      document.title = 'Pomodoro'
      const interval = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if(timer == false) document.title = 'Paused...'
  }, [timer]);

  return (
  <div className="w-screen h-screen flex flex-col justify-center items-center bg-pink-200">
    <div className="bg-white rounded-2xl drop-shadow-2xl relative">
      {timer == false && <div className="absolute w-full h-full bg-slate-200 rounded-2xl text-center flex items-center justify-center font-light text-8xl"></div>}
      <button
        className="text-9xl font-light m-8 relative z-10"
        onClick={() => setTimer(!timer)}
      >
        {Math.floor(time / 60)}:{time % 60 > 10 ? time % 60 : `0${time % 60}`}
      </button>
    </div>
    <div className="flex justify-around absolute bottom-0 right-0 p-2">
      <button
        className="bg-white px-8 py-4 m-2 rounded-2xl drop-shadow-2xl bg-opacity-50"
        onClick={() => setTime(25 * 60)}
      >
        work
      </button>
      <button
        className="bg-white px-8 py-4 m-2 rounded-2xl drop-shadow-2xl bg-opacity-50"
        onClick={() => setTime(5 * 60)}
      >
        break
      </button>
    </div>
  </div>
);

}

export default App;