import { FormatePrice } from "@/utils/price";
import { Grid, Typography } from "@mui/material";
import { FC } from "react";

interface props {}

export const OrderSummary: FC<props> = ({}) => {
  return (
    <Grid container>
      {/* -------------------------------------------------------------------- */}
      <Grid item xs={6}>
        <Typography>No. Productos</Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifyContent={"end"}>
        <Typography>3 items</Typography>
      </Grid>
      {/* -------------------------------------------------------------------- */}
      <Grid item xs={6}>
        <Typography>Sub. total</Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifyContent={"end"}>
        <Typography>{FormatePrice(144.33)}</Typography>
      </Grid>
      {/* -------------------------------------------------------------------- */}
      <Grid item xs={6}>
        <Typography variant="subtitle1">Impuestos (15%)</Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifyContent={"end"}>
        <Typography>{FormatePrice(35.34)}</Typography>
      </Grid>
      {/* -------------------------------------------------------------------- */}
      <Grid item xs={6}>
        <Typography variant="subtitle1">Total: </Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifyContent={"end"}>
        <Typography>{FormatePrice(35.34)}</Typography>
      </Grid>
      {/* -------------------------------------------------------------------- */}
    </Grid>
  );
};
