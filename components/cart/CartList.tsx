import { initialData } from "@/database/products";
import NextLink from "next/link";
import {
  Box,
  Button,
  CardActionArea,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { ItemCounter } from "../ui";
const productInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];
interface props {
  editable?: boolean;
}

export const CartList: FC<props> = ({ editable = false }) => {
  return (
    <>
      {productInCart.map((resp) => (
        <Grid container spacing={2} key={resp.slug} sx={{ mb: 1 }}>
          {/* <Typography key={resp.slug}>{resp.slug}</Typography> */}
          <Grid item xs={3}>
            <NextLink href="/product/slug">
              <Link>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    sx={{ borderRadius: "5px" }}
                    image={`/products/${resp.images[0]}`}
                  />
                </CardActionArea>
              </Link>
            </NextLink>
          </Grid>
          <Grid item xs={7}>
            <Box display="flex" flexDirection="column">
              <Typography variant="body1">{resp.title}</Typography>
              <Typography variant="body1">
                Talla: <strong>M</strong>
              </Typography>
              {editable ? (
                <ItemCounter num={1} event={(e: number) => {}} />
              ) : (
                <Typography variant="subtitle1">3 items</Typography>
              )}
            </Box>
          </Grid>

          <Grid
            item
            xs={2}
            display="flex"
            alignItems={"center"}
            flexDirection="column"
          >
            <Typography variant="subtitle1">{`$${resp.price}`}</Typography>
            {editable && (
              <Button variant={"text"} color="secondary">
                Remover
              </Button>
            )}
          </Grid>
        </Grid>
      ))}
    </>
  );
};
