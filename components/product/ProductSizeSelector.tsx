import { ISizes } from "@/interface/index";
import { Box, Button } from "@mui/material";
import { FC } from "react";

interface props {
  selectorSize: ISizes;
  size: ISizes[];
}

export const ProductSizeSelector: FC<props> = ({ selectorSize, size }) => {
  return (
    <Box>
      {size.map((e, index) => {
        return (
          <Button size="small" key={index}>
            {e}
          </Button>
        );
      })}
    </Box>
  );
};
