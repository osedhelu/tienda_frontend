import { CartList, OrderSummary, ShopLayout } from "@/components/index";
import NextLink from "next/link";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
  Box,
  Link,
  Chip,
} from "@mui/material";
import { NextPage } from "next";
import {
  CreditCardOffOutlined,
  CreditScoreOutlined,
} from "@mui/icons-material";

interface props {}

const OrdersPage: NextPage<props> = ({}) => {
  return (
    <ShopLayout
      title={"Resumen de orden 123456678"}
      pageDescription={"Resumen de la orden"}
    >
      <Typography variant="h1" component="h1">
        Orden: ABC1234
      </Typography>
      {true ? (
        <Chip
          sx={{ my: 2 }}
          label="La orden ya fue pagada"
          variant="outlined"
          color="success"
          icon={<CreditScoreOutlined />}
        />
      ) : (
        <Chip
          sx={{ my: 2 }}
          label="pendiente de pago"
          variant="outlined"
          color="error"
          icon={<CreditCardOffOutlined />}
        />
      )}

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
                <Typography variant="h1"> Pagar</Typography>
                {true ? (
                  <Chip
                    sx={{ my: 2 }}
                    label="La orden ya fue pagada"
                    variant="outlined"
                    color="success"
                    icon={<CreditScoreOutlined />}
                  />
                ) : (
                  <Chip
                    sx={{ my: 2 }}
                    label="pendiente de pago"
                    variant="outlined"
                    color="error"
                    icon={<CreditCardOffOutlined />}
                  />
                )}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default OrdersPage;
