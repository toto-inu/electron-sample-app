import { Box, Stack } from '@mui/material';
import Button from '../miniParts/Button';

export default () => {
  const shutdownHandler = () => {
    window.electron.ipcRenderer.sendMessage('shutdown', []);
  };
  return (
    <Stack spacing={4}>
      <Button name="シャットダウン" onClick={shutdownHandler} />
    </Stack>
  );
};
