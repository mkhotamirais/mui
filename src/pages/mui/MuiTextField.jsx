import { InputAdornment, Stack, TextField } from "@mui/material";
import { useState } from "react";

const MuiTextField = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <h2>MuiTextField</h2>
      <Stack spacing={2}>
        <Stack spacing={2} direction={"row"}>
          <TextField label="name" variant="standard" />
          <TextField label="name" variant="outlined" />
          <TextField label="name" variant="filled" />
        </Stack>
        <Stack spacing={2} direction={"row"}>
          <TextField label="small secondary" size="small" color="secondary" />
          <TextField label="input required" required error />
          <TextField label="password" type="password" helperText="this is helper text for input field" />
        </Stack>
        <Stack spacing={2} direction={"row"}>
          <TextField label="read only" InputProps={{ readOnly: true }} />
          <TextField label="amount" InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }} />
          <TextField label="weight" InputProps={{ endAdornment: <InputAdornment position="end">kg</InputAdornment> }} />
        </Stack>
        <Stack spacing={2} direction={"row"}>
          <TextField
            label="input required"
            required
            error={!value}
            onChange={(e) => setValue(e.target.value)}
            helperText={!value ? "Required" : "do not share your password with anyone"}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default MuiTextField;
