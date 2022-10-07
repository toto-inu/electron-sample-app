import { Box, Stack, styled } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import Timer from 'components/organisms/Timer';

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
    <Stack direction="row" alignItems="center" spacing="12px">
      <StyledPowerButton onClick={shutdown}>
        <PowerSettingsNewIcon />
      </StyledPowerButton>

      <Timer />

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
