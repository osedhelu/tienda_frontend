import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { FC, useMemo, useState } from "react";
import { FormatePrice } from "@/utils/price";
import { SeedProduct } from "@/interface/index";

interface props {
  product: SeedProduct;
}

export const ProductCard: FC<props> = ({
  product: { images, title, slug, price },
}) => {
  const [isHover, setIsHover] = useState(false);
  const url = useMemo(() => {
    return isHover ? `/products/${images[1]}` : `/products/${images[0]}`;
  }, [isHover]);
  return (
    <>
      <Grid
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        item
        xs={6}
        sm={4}
        key={slug}
      >
        <Card>
          <CardActionArea>
            <CardMedia
              className="fadeIn"
              component={"img"}
              alt={title}
              image={url}
            />
          </CardActionArea>
        </Card>
        <Box sx={{ mt: 1 }} className="fadeIn">
          <Typography fontWeight={700}>{title}</Typography>
          <Typography fontWeight={500}>{FormatePrice(price)}</Typography>
        </Box>
      </Grid>
    </>
  );
};
