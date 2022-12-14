import { Box } from '@mui/material';

import { useEffect } from 'react';
import { useTimer } from 'react-timer-hook';

export default ({ lastTime }: any) => {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp: new Date() });

  useEffect(() => {
    const time = new Date();
    time.setHours(time.getHours() + lastTime[0]);
    time.setMinutes(time.getMinutes() + lastTime[1]);
    time.setSeconds(time.getSeconds() + lastTime[2]);
    console.log('🦊', time, lastTime);
    restart(time);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastTime]);

  const formatTime = (h: number, min: number, sec: number) => {
    return `${String(h).padStart(2, '0')}:${String(min).padStart(
      2,
      '0'
    )}:${String(sec).padStart(2, '0')}`;
  };
  return <Box>{formatTime(hours, minutes, seconds)}</Box>;
};
