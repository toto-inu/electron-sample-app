import { Box } from '@mui/material';

import { useEffect, useState } from 'react';
import { useTimer } from 'react-timer-hook';

export default () => {
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
    time.setSeconds(time.getSeconds() + 5);
    restart(time);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formatTime = (h: number, min: number, sec: number) => {
    return `${String(h).padStart(2, '0')}:${String(min).padStart(
      2,
      '0'
    )}:${String(sec).padStart(2, '0')}`;
  };
  return <Box>{formatTime(hours, minutes, seconds)}</Box>;
};
