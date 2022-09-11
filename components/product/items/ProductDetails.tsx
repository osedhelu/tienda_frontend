import { FC } from "react";
import { Box, Button, Chip, Typography } from "@mui/material";
import { FormatePrice } from "@/utils/price";
import { ItemCounter, ProductSizeSelector } from "@/components/index";
import { SeedProduct } from "@/interface/index";
interface props {
  product: SeedProduct;
}

export const ProductDetails: FC<props> = ({ product }) => {
  return (
    <>
      <Box display="flex" flexDirection={"column"}>
        <Typography variant="h1" component="h1">
          {product.title}
        </Typography>
        <Typography variant="subtitle1" component="h2">
          {FormatePrice(product.price)}
        </Typography>
        {/* Box: flex */}
        <Box sx={{ my: 2 }}>
          <Typography variant="subtitle2">Cantidad</Typography>

          <ItemCounter num={3} event={(a) => {}} />

          <ProductSizeSelector
            selectorSize={product.sizes[0]}
            size={product.sizes}
          />
        </Box>
        {/* agregar al carrito */}
        <Button color="secondary" className="circular-btn">
          Agregar al carrito
        </Button>
        {false && (
          <Chip
            label="No hay productos Disponible"
            color="error"
            variant="outlined"
          />
        )}

        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle2">Descricion</Typography>
          <Typography variant="body2">{product.description}</Typography>
        </Box>
      </Box>
    </>
  );
};
