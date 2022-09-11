import { ShopLayout, CartList, OrderSummary } from "@/components/index";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";

interface props {}

const Cart: NextPage<props> = ({}) => {
  const router = useRouter();
  const GotoCheckout = () => {
    router.push("/checkout/summary");
  };
  return (
    <ShopLayout
      title={"Carrito | 3"}
      pageDescription={"Carrito de compra de la tienda"}
    >
      <Typography variant="h1" component="h1">
        Carrito
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={7}>
          <CartList editable />
        </Grid>

        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">Orders</Typography>
              <Divider sx={{ my: 1 }} />
              <OrderSummary />
              <Box sx={{ mt: 3 }}>
                <Button onClick={() => GotoCheckout()} color="secondary">
                  Checkount
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default Cart;
