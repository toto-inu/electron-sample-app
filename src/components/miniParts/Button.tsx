import { Button, styled } from '@mui/material';

const StyledButton = styled(Button)`
  /* background-color: #ffffff; */
`;

type Props = {
  name: string;
  onClick: () => void;
};

export default ({ name, onClick }: Props): JSX.Element => {
  return (
    <StyledButton variant="contained" color="info" onClick={onClick}>
      {name}
    </StyledButton>
  );
};
