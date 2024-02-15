import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup, FormHelperText } from "@mui/material";
import { useState } from "react";
import { Bookmark, BookmarkBorder } from "@mui/icons-material";

const MuiCheckbox = () => {
  const [acceptInc, setAcceptInc] = useState(false);
  const [skills, setSkills] = useState([]);

  const handleChange = (e) => {
    setAcceptInc(e.target.checked);
  };

  const handleSkillChange = (e) => {
    const index = skills.indexOf(e.target.value);
    index === -1 ? setSkills([...skills, e.target.value]) : setSkills(skills.filter((skill) => skill !== e.target.value));
  };
  return (
    <>
      <h2>MuiCheckbox</h2>
      <Box>
        <Box>
          <FormControlLabel
            label="I accept terms and conditions"
            control={<Checkbox checked={acceptInc} onChange={handleChange} size="small" color="secondary" />}
          />
        </Box>
        <Box>
          <Checkbox icon={<BookmarkBorder />} checkedIcon={<Bookmark />} checked={acceptInc} onChange={handleChange} />
        </Box>
        <Box>
          <FormControl error>
            <FormLabel>Skills</FormLabel>
            <FormGroup>
              <FormControlLabel
                label="html"
                control={<Checkbox value="html" checked={skills.includes("html")} onChange={handleSkillChange} />}
              />
              <FormControlLabel
                label="css"
                control={<Checkbox value="css" checked={skills.includes("css")} onChange={handleSkillChange} />}
              />
              <FormControlLabel
                label="javascript"
                control={
                  <Checkbox value="javascript" checked={skills.includes("javascript")} onChange={handleSkillChange} />
                }
              />
            </FormGroup>
            <FormHelperText>Invalid section</FormHelperText>
          </FormControl>
        </Box>
      </Box>
    </>
  );
};

export default MuiCheckbox;
