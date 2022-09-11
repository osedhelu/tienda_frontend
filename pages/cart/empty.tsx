import { ShopLayout } from "@/components/layout";
import { RemoveShoppingCartOutlined } from "@mui/icons-material";
import { Box, Link, Typography } from "@mui/material";
import { NextPage } from "next";
import NextLink from "next/link";

interface props {}

const EmptyComponent: NextPage<props> = ({}) => {
  return (
    <ShopLayout
      title={"Carito vacio"}
      pageDescription={"No hay articulos en el carrito de compras"}
    >
      <Box
        display="flex"
        justifyContent={"center"}
        alignItems="center"
        height={"calc(100vh - 200px)"}
        sx={{
          flexDirection: {
            xs: "column",
            sm: "row",
          },
        }}
      >
        <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography
            variant="h1"
            component={"h1"}
            fontSize={20}
            fontWeight={200}
          >
            Su carrito esta vacio
          </Typography>
          <NextLink href={"/"} passHref>
            <Link typography="h4" color="secondary">
              Regresar
            </Link>
          </NextLink>
        </Box>
      </Box>
    </ShopLayout>
  );
};

export default EmptyComponent;
