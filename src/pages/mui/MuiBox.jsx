import { Box, Divider, Stack } from "@mui/material";

const MuiBox = () => {
  return (
    <>
      <h2>MuiBox</h2>
      <Stack
        sx={{ border: "1px solid" }}
        spacing={2}
        direction={"row"}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          component={"span"}
          sx={{
            backgroundColor: "primary.main",
            display: "block",
            color: "white",
            height: "100px",
            width: "100px",
            padding: "16px",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          halo
        </Box>
        <Box display="flex" height="100px" width="100px" bgcolor="success.light" p={2}>
          halo2
        </Box>
      </Stack>
      <Stack sx={{ border: "1px solid" }} direction={"row"}>
        <div>1</div>
        <div>2</div>
      </Stack>
      <Stack sx={{ border: "1px solid" }} direction={"row-reverse"}>
        <div>1</div>
        <div>2</div>
      </Stack>
      <Stack sx={{ border: "1px solid" }} direction={"column"}>
        <div>1</div>
        <div>2</div>
      </Stack>
      <Stack sx={{ border: "1px solid" }} direction={"column-reverse"}>
        <div>1</div>
        <div>2</div>
      </Stack>
    </>
  );
};

export default MuiBox;
