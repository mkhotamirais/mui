import { Box, MenuItem, Stack, TextField } from "@mui/material";
import { useState } from "react";

const MuiSelect = () => {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);

  const handleChangeCountries = (e) => {
    const value = e.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <>
      <h2>MuiSelect</h2>
      <Stack spacing={2} direction={"row"}>
        <Box width={"250px"}>
          <TextField
            label="Select country"
            select
            fullWidth
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            helperText="choose single country"
            size="small"
          >
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="US">USA</MenuItem>
            <MenuItem value="AU">Austaralia</MenuItem>
          </TextField>
        </Box>
        <Box width={"250px"}>
          <TextField
            label="Select multiple countries"
            select
            fullWidth
            value={countries}
            onChange={handleChangeCountries}
            SelectProps={{ multiple: true }}
            helperText="choose multiple countries"
            size="small"
            error
          >
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="US">USA</MenuItem>
            <MenuItem value="AU">Austaralia</MenuItem>
          </TextField>
        </Box>
      </Stack>
    </>
  );
};

export default MuiSelect;
