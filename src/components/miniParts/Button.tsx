import { Button, styled } from '@mui/material';

const StyledButton = styled(Button)`
  /* background-color: #ffffff; */
  && {
    border-radius: 2px;
  }
`;

type Props = {
  name: string;
  onClick: () => void;
};

export default ({ name, onClick }: Props): JSX.Element => {
  return (
    <StyledButton variant="contained" color="warning" onClick={onClick}>
      {name}
    </StyledButton>
  );
};
