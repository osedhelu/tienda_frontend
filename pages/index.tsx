import { TitlePage, ShopLayout, ProductCard } from "@/components/index";
import { initialData } from "@/database/products";
import { Grid } from "@mui/material";
import type { NextPage } from "next";
const Home: NextPage = () => {
  return (
    <ShopLayout
      title={"Shop | Home"}
      pageDescription={"Mira nuestros productos"}
    >
      <TitlePage description="Todos los productos" title="Tienda" />
      <Grid container spacing={4}>
        {initialData.products.map((e) => (
          <ProductCard product={e} key={e.slug} />
        ))}
      </Grid>
    </ShopLayout>
  );
};

export default Home;
