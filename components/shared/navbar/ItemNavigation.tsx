import { FC } from "react";
import NextLink from "next/link";
import { Badge, Button, IconButton, Link } from "@mui/material";
import {
  SearchOutlined,
  ShoppingBagOutlined,
  MenuOpenOutlined,
} from "@mui/icons-material";

interface props {}

export const ItemNavigation: FC<props> = ({}) => {
  return (
    <>
      <IconButton>
        <SearchOutlined />
      </IconButton>
      <NextLink href={"/cart"} passHref>
        <Link>
          <IconButton>
            <Badge badgeContent={8} color="secondary">
              <ShoppingBagOutlined />
            </Badge>
          </IconButton>
        </Link>
      </NextLink>
      <Button>
        <MenuOpenOutlined />
      </Button>
    </>
  );
};
