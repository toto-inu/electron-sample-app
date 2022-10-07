import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ClockPicker, LocalizationProvider } from '@mui/x-date-pickers';
import Timer from './Timer';

export default () => {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Dayjs | null>(
    dayjs('2022-04-07T10:15')
  );
  const [lastTime, setLastTime] = React.useState<any[]>([0, 0, 0]);
  const resize = (w: number, h: number) => {
    window.electron.ipcRenderer.sendMessage('resizeWindow', [w, h]);
  };

  const handleClickOpen = () => {
    resize(500, 500);
    setOpen(true);
  };

  const handleClose = () => {
    resize(200, 50);
    setLastTime([date?.hour(), date?.minute(), 0]);
    setOpen(false);
  };

  return (
    <div>
      <Button variant="text" onClick={handleClickOpen} sx={{ color: 'white' }}>
        <Timer lastTime={lastTime} />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <ClockPicker date={date} onChange={(newDate) => setDate(newDate)} />
          </LocalizationProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>キャンセル</Button>
          <Button onClick={handleClose}>設定</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
