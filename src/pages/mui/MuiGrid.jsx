import { Box, Grid } from "@mui/material";

const boxStyle = {
  display: "block",
  color: "white",
  height: "5px",
  width: "full",
  padding: "16px",
  "&:hover": {
    backgroundColor: "primary.light",
  },
};

const MuiGrid = () => {
  return (
    <div>
      <h2>MuiGrid</h2>
      <Grid container my={4} border="1px solid">
        <Grid item xs={3}>
          <Box sx={boxStyle} bgcolor={"primary.light"} />
        </Grid>
        <Grid item xs={8}>
          <Box sx={boxStyle} bgcolor={"primary.main"} />
        </Grid>
        <Grid item xs={8}>
          <Box sx={boxStyle} bgcolor={"secondary.main"} />
        </Grid>
      </Grid>
      <ul>
        <li>the grid component under the hood uses the flexbox module</li>
        <li>the grid consists of 12 columns</li>
        <li>each item in the grid can take up one or more columns as its width</li>
        <li>xs mobile device, sm tablet, md desktop, lg and xl for larger monitors</li>
        <li>
          we can assign integer values to each breakpoint which indicates how many of the 12 available columns are occupied
          bya that item when the viewport statisfies that breakpoint constraints
        </li>
      </ul>
    </div>
  );
};

export default MuiGrid;
