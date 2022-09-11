import { CartList, OrderSummary } from "@/components/index";
import NextLink from "next/link";
import { ShopLayout } from "@/components/layout";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
  Box,
  Button,
  Link,
} from "@mui/material";
import { NextPage } from "next";

interface props {}

const CheckoutSummary: NextPage<props> = ({}) => {
  return (
    <ShopLayout
      title={"Resumen de orden"}
      pageDescription={"Resumen de la orden"}
    >
      <Typography variant="h1" component="h1">
        Carrito
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={7}>
          <CartList />
        </Grid>

        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">Resumen (3 productos)</Typography>
              <Divider sx={{ my: 1 }} />
              <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle1">
                  {" "}
                  Direccin de entrega
                </Typography>
                <NextLink href={"/checkout/address"} passHref>
                  <Link>Editar</Link>
                </NextLink>
              </Box>
              <Typography>Oscar Herrera </Typography>
              <Typography>323 de algun lugar </Typography>
              <Typography> Stittsville, HYA 345</Typography>
              <Typography> Canada</Typography>
              <Typography> +1 287364827346</Typography>

              <Divider sx={{ my: 1 }} />
              <Box display="flex" justifyContent="end">
                <NextLink href={"/cart"} passHref>
                  <Link>Editar</Link>
                </NextLink>
              </Box>
              <OrderSummary />
              <Box sx={{ mt: 3 }}>
                <Button color="secondary" className="circular-btn" fullWidth>
                  Confirmar Orden
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default CheckoutSummary;
