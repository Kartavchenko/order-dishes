import { styled } from "@mui/system";
import { Box, Button, Typography } from "@mui/material";

export const Container = styled(Box)`
  display: flex;
  justify-content: center;
  padding: 50px;
`;

export const BoxForm = styled(Box)`
  width: 300px;

  @media screen and (min-width: 768px){
    width: 500px;
  }
`;

export const BoxInput = styled(Box)`
	display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const LabelText = styled(Typography)`
  margin-bottom: 10px;
`;

export const BoxPizzaOptions = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const BoxButtons = styled(Box)`
  display: flex;
  justify-content: center;
`;

export const ButtonSubmit = styled(Button)`
  margin-right: 20px;
`;

export const ButtonResetForm = styled(Button)`
  
`;

export const BoxSlider = styled(Box)`
  min-width: 400px;
`;