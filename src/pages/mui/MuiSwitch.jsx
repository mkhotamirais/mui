import { Box, FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";

const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <>
      <h2>MuiSwitch</h2>
      <Box>
        <FormControlLabel
          label="Dark mode"
          control={<Switch checked={checked} onChange={handleChange} size="small" color="secondary" />}
        />
      </Box>
      <p>Tugas: checkbox group, lihat halaman checkbox, ganti checkbox jadi switch</p>
    </>
  );
};

export default MuiSwitch;
