import {
  ShopLayout,
  ProductSlideShow,
  ProductDetails,
} from "@/components/index";
import { initialData } from "@/database/products";
import { SeedProduct } from "@/interface/index";
import { Grid } from "@mui/material";
import { GetServerSideProps, NextPage } from "next";

interface props {
  product: SeedProduct;
}

const ProductSlug: NextPage<props> = ({ product }) => {
  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={7}>
          <ProductSlideShow images={product.images} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <ProductDetails product={product} />
        </Grid>
      </Grid>
    </ShopLayout>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const product = initialData.products[0];
  return {
    props: { product },
  };
};

export default ProductSlug;
