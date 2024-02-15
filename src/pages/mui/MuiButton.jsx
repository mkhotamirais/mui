import { Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from "@mui/material";
import { Send, FormatBold, FormatItalic, FormatUnderlined } from "@mui/icons-material";
import { useState } from "react";

const MuiButton = () => {
  return (
    <>
      <h2>mui button</h2>
      <h3>mui button basic</h3>
      <MuiButtonBasic />
      <h3>mui button group</h3>
      <MuiButtonGroup />
      <h3>mui button toggle</h3>
      <MuiButtonToggle />
    </>
  );
};

export default MuiButton;

const MuiButtonBasic = () => (
  <Stack spacing={2}>
    <Stack spacing={2} direction={"row"}>
      <Button variant="text">text</Button>
      <Button variant="contained">contained</Button>
      <Button variant="outlined">outlined</Button>
      <Button variant="outlined" href="/">
        button anchor tag
      </Button>
    </Stack>
    <Stack spacing={2} direction={"row"}>
      <Button variant="contained" color="primary">
        contained
      </Button>
      <Button variant="outlined" color="secondary">
        secondary
      </Button>
      <Button variant="contained" color="error">
        error
      </Button>
      <Button variant="contained" color="warning">
        warning
      </Button>
      <Button variant="contained" color="info">
        info
      </Button>
      <Button variant="contained" color="success">
        success
      </Button>
    </Stack>
    <Stack display="block" spacing={2} direction={"row"}>
      <Button variant="contained" size="small">
        Small
      </Button>
      <Button variant="contained" size="medium">
        medium
      </Button>
      <Button variant="contained" size="large">
        large
      </Button>
    </Stack>
    <Stack display="block" spacing={2} direction={"row"}>
      <Button variant="contained" startIcon={<Send />}>
        start send icon
      </Button>
      <Button variant="contained" endIcon={<Send />}>
        end send icon
      </Button>
      <IconButton aria-label="send" color="success" size="small">
        <Send />
      </IconButton>
    </Stack>
    <Stack spacing={2} direction="row" flexWrap={"wrap"}>
      <Button variant="contained">elevationDefault</Button>
      <Button variant="contained" disableElevation>
        disableElevation
      </Button>
      <Button variant="contained">ripple</Button>
      <Button variant="contained" disableRipple>
        ripple is clicked effect
      </Button>
      <Button variant="contained" onClick={() => alert("hello")}>
        onclick
      </Button>
    </Stack>
  </Stack>
);

const MuiButtonGroup = () => (
  <>
    <Button variant="contained">left</Button>
    <Button variant="contained">center</Button>
    <Button variant="contained">right</Button>
    <br />
    <br />
    <Stack spacing={2}>
      <Stack spacing={2} direction={"row"}>
        <ButtonGroup variant="contained">
          <Button>left</Button>
          <Button>center</Button>
          <Button>right</Button>
        </ButtonGroup>
        <ButtonGroup variant="outlined">
          <Button>left</Button>
          <Button>center</Button>
          <Button>right</Button>
        </ButtonGroup>
      </Stack>
      <Stack>
        <ButtonGroup variant="text">
          <Button>left</Button>
          <Button>center</Button>
          <Button>right</Button>
        </ButtonGroup>
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="small"
          color="secondary"
          aria-label="aligment button group"
        >
          <Button>left</Button>
          <Button>center</Button>
          <Button>right</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  </>
);

const MuiButtonToggle = () => {
  const [formats, setFormats] = useState(null);
  const [formats2, setFormats2] = useState(null);
  const handleFormatChange = (e, updatedFormats = []) => {
    setFormats(updatedFormats);
  };
  const handleFormatChange2 = (e, updatedFormats = []) => {
    setFormats2(updatedFormats);
  };
  return (
    <Stack spacing={2}>
      <Stack spacing={2} direction={"row"}>
        <ToggleButtonGroup
          aria-label="text formatting"
          size="small"
          color="success"
          value={formats}
          onChange={handleFormatChange}
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBold />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalic />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underliend">
            <FormatUnderlined />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <ToggleButtonGroup
          aria-label="text formatting"
          size="small"
          color="success"
          value={formats2}
          onChange={handleFormatChange2}
          orientation="vertical"
          exclusive
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBold />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalic />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underliend">
            <FormatUnderlined />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};
