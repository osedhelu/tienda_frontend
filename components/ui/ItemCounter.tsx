import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { FC } from "react";

interface props {
  num: number;
  event: (e: number) => void;
}

export const ItemCounter: FC<props> = ({ num, event }) => {
  return (
    <Box display={"flex"} alignItems={"center"}>
      <IconButton>
        <RemoveCircleOutline />
      </IconButton>
      <Typography sx={{ width: 40, textAlign: "center" }}>{num}</Typography>
      <IconButton>
        <AddCircleOutline />
      </IconButton>
    </Box>
  );
};
