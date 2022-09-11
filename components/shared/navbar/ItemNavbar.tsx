import { FC } from "react";
import NextLink from "next/link";
import { MenuItems } from "database/menu";
import { Box, Button, Link } from "@mui/material";

interface props {}

export const ItemNavbar: FC<props> = ({}) => {
  return (
    <Box
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
      }}
    >
      {MenuItems.map((e, index) => (
        <NextLink key={index} href={e.path} passHref>
          <Link>
            <Button>{e.title}</Button>
          </Link>
        </NextLink>
      ))}
    </Box>
  );
};
