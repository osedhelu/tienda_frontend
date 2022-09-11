import { SearchOutlined, ShoppingBagOutlined } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { MenuItems } from "database/menu";
import NextLink from "next/link";
import { FC } from "react";
import { ItemNavbar } from "./navbar/ItemNavbar";
import { ItemNavigation } from "./navbar/ItemNavigation";

interface props {}

export const ShopNavbar: FC<props> = ({}) => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <NextLink href={"/"} passHref>
            <Link display={"flex"} alignItems={"center"}>
              <Typography variant="h6">Teslo |</Typography>
              <Typography sx={{ ml: 0.5 }}>Shop</Typography>
            </Link>
          </NextLink>

          {/* TODO: flex */}
          <Box flex={1} />
          <ItemNavbar />

          <Box flex={1} />
          <ItemNavigation />
        </Toolbar>
      </AppBar>
    </>
  );
};
