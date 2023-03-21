import {
  TextField,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Radio,
  Typography,
} from "@mui/material";
import { BoxSlider } from "../Form/Form.styled";

export const renderFieldName = ({
  input,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    error={touched && error}
    helperText={touched && error ? "Name is required" : null}
    {...input}
    {...custom}
  />
);

export const renderFieldTime = ({
  input,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    type="time"
    inputProps={{
      step: 2,
    }}
    error={touched && error}
    helperText={touched && error ? "Time is required" : null}
    {...input}
    {...custom}
  />
);

export const renderFieldDish = ({
  input,
  meta: { touched, error },
  ...rest
}) => (
  <FormControl>
    <RadioGroup {...input} {...rest}>
      <FormControlLabel value="pizza" control={<Radio />} label="Pizza" />
      <FormControlLabel value="soup" control={<Radio />} label="Soup" />
      <FormControlLabel value="sandwich" control={<Radio />} label="Sandwich" />
    </RadioGroup>
    {touched && error ? (
      <Typography fontSize="small" color="error">
        Chose the dish
      </Typography>
    ) : null}
  </FormControl>
);

export const renderFieldDiameter = ({
  input,
  meta: { touched, error },
  ...custom
}) => (
  <BoxSlider>
    <input type="range" min={20} max={30} step={10} {...input} {...custom} />
    {touched && error ? (
      <Typography fontSize="small" color="error">
        Choose diameter of pizza
      </Typography>
    ) : null}
  </BoxSlider>
);

export const renderFieldPices = ({
  input,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    inputProps={{
      min: 1,
      step: 1,
    }}
    error={touched && error}
    helperText={touched && error ? "Enter quantity pieces of pizza" : null}
    {...input}
    {...custom}
  />
);

export const renderFieldSpiceness = ({
  input,
  meta: { touched, error },
  ...custom
}) => (
  <BoxSlider>
    <input type="range" min={1} max={10} step={1} {...input} {...custom} />
    {touched && error ? (
      <Typography fontSize="small" color="error">
        Choose spiceness of soup
      </Typography>
    ) : null}
  </BoxSlider>
);

export const renderFieldSliceBread = ({
  input,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    error={touched && error}
    helperText={touched && error ? "Enter quantity of slice" : null}
    inputProps={{
      min: 1,
      step: 1,
    }}
    {...input}
    {...custom}
  />
);
