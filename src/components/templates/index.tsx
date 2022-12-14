import { Box, styled } from '@mui/material';
import React from 'react';

const StyledBody = styled(Box)`
  position: relative;
  color: white;
  height: 100vh;
  /* background: linear-gradient(
    200.96deg,
    #fedc2a -29.09%,
    #dd5789 51.77%,
    #7a2c9e 129.35%
  ); */
  border: solid 1px #ff0000;
  font-family: sans-serif;
  overflow-y: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type Props = {
  children: React.ReactNode;
};

export default ({ children }: Props) => {
  return <StyledBody>{children}</StyledBody>;
};
