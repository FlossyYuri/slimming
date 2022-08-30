import { useEffect, useState } from 'react';

function getTimeRemaining(endtime: number) {
  const t = endtime - new Date().getTime();
  const seconds = Math.floor((t / 1000) % 60);
  const minutes = Math.floor((t / 1000 / 60) % 60);
  const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  const days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

const Timer = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    let timeinterval: any;
    function initializeClock(endtime: number) {
      function updateClock() {
        const t = getTimeRemaining(endtime);

        setTime({
          days: t.days,
          hours: t.hours,
          minutes: t.minutes,
          seconds: t.seconds,
        });
        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      }
      updateClock();
      timeinterval = setInterval(updateClock, 1000);
    }
    const deadline = new Date().getTime() + 2 * 60 * 60 * 1000;
    initializeClock(deadline);
    return () => {
      clearInterval(timeinterval);
    };
  }, []);

  return (
    <div>
      <h2 className='text-3xl text-white font-semibold mt-8'>
        O tempo está acabando!
      </h2>
      <p className='text-2xl text-white mb-8'>Você vai ficar de fora?</p>
      <div className='flex gap-4 text-white'>
        <div>
          <span className='rounded text-4xl font-semibold bg-black bg-opacity-25 w-16 h-16 flex justify-center items-center'>
            {time.days}
          </span>
          <div className='py-1'>Dias</div>
        </div>
        <div>
          <span className='rounded text-4xl font-semibold bg-black bg-opacity-25 w-16 h-16 flex justify-center items-center'>
            {time.hours}
          </span>
          <div className='py-1'>Horas</div>
        </div>
        <div>
          <span className='rounded text-4xl font-semibold bg-black bg-opacity-25 w-16 h-16 flex justify-center items-center'>
            {time.minutes}
          </span>
          <div className='py-1'>Minutos</div>
        </div>
        <div>
          <span className='rounded text-4xl font-semibold bg-black bg-opacity-25 w-16 h-16 flex justify-center items-center'>
            {time.seconds}
          </span>
          <div className='py-1'>Segundo</div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
