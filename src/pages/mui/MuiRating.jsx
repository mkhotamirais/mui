import { Rating, Stack } from "@mui/material";
import { useState } from "react";
import { FavoriteBorder, FavoriteOutlined } from "@mui/icons-material";

const MuiRating = () => {
  const [value, setValue] = useState(null);
  console.log({ value });
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <h2>MuiRating</h2>
      <Stack spacing={2}>
        <Rating
          value={value}
          onChange={handleChange}
          precision={0.5}
          size="large"
          icon={<FavoriteOutlined fontSize="inherit" color="error" />}
          emptyIcon={<FavoriteBorder fontSize="inherit" />}
          //   readOnly
          //   highlightSelectedOnly
        />
      </Stack>
    </>
  );
};

export default MuiRating;
