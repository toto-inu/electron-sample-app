import { Box, Stack, styled } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import Timer from 'components/organisms/Timer';
import DialogTimer from 'components/organisms/DialogTimer';

const StyledPowerButton = styled(Box)`
  width: 40px;
  height: 30px;
  background-color: rgba(255, 0, 0, 0.7);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default () => {
  const shutdown = () => {
    // eslint-disable-next-line no-alert
    const checkExeFlg = window.confirm('シャットダウンしますか？');
    if (checkExeFlg) {
      window.electron.ipcRenderer.sendMessage('shutdown', []);
    }
  };

  const move = () => {
    window.electron.ipcRenderer.sendMessage('hoverMove', []);
  };
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing="12px"
      sx={{
        position: 'absolute',
        padding: '8px',
        top: '0px',
        left: '0px',
        background: `linear-gradient(
        200.96deg,
        #fedc2a -29.09%,
        #dd5789 51.77%,
        #7a2c9e 129.35%
      )`,
      }}
    >
      <StyledPowerButton onClick={shutdown}>
        <PowerSettingsNewIcon />
      </StyledPowerButton>

      <DialogTimer />

      <KeyboardArrowDownIcon
        sx={{
          backgroundColor: 'rgba(255,255,255,0.2)',
          borderRadius: '15px',
          cursor: 'pointer',
        }}
        onClick={move}
      />
    </Stack>
  );
};
