import { Box, Stack } from '@mui/material';
import Button from '../miniParts/Button';

export default () => {
  const shutdownHandler = () => {
    window.electron.ipcRenderer.sendMessage('shutdown', []);
  };
  return (
    <Stack spacing={4}>
      <Box>Todo-List</Box>
      <Button name="シャットダウン" onClick={shutdownHandler} />
    </Stack>
  );
};
