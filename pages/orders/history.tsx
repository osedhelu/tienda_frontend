import { ShopLayout } from "@/components/index";
import { Chip, Grid, Link, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import NextLink from "next/link";
import { NextPage } from "next";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 100,
  },
  {
    field: "fullname",
    headerName: "Nombre Completo",
    width: 300,
  },
  {
    field: "paid",
    headerName: "Pagado",
    description: "Muestra informacion si esta pagada la orden o no",
    width: 200,
    renderCell: (a) => {
      return (
        <>
          {a.row.paid ? (
            <Chip color="success" label="Pagado" variant="outlined" />
          ) : (
            <Chip color="error" label="No pagado" variant="outlined" />
          )}
        </>
      );
    },

    // cell: ({ field }) => <>hola</>,
  },
  {
    field: "orden",
    headerName: "Ver orden",
    description: "Muestra informacion si esta pagada la orden o no",
    width: 200,
    sortable: false,
    renderCell: (a) => {
      return (
        <NextLink href={`/orders/${a.row.id}`} passHref>
          <Link underline="always">Ver orden</Link>
        </NextLink>
      );
    },

    // cell: ({ field }) => <>hola</>,
  },
];
const rows = [
  {
    id: 1,
    fullname: "Oscar Herrera",
    paid: false,
  },
  {
    id: 2,
    fullname: "Melisa Flores",
    paid: true,
  },
  {
    id: 3,
    fullname: "Hernande Vallejo",
    paid: false,
    orden: "224339283923",
  },
  {
    id: 4,
    fullname: "Emin Reyes",
    paid: true,
  },
];
interface props {}

const OrdersHistory: NextPage<props> = ({}) => {
  return (
    <ShopLayout
      title={"historial de ordenes"}
      pageDescription={"Historial de ordenes del cliente"}
    >
      <Typography variant="h1" component="h1">
        Historial de Ordenes
      </Typography>
      <Grid container>
        <Grid item xs={12} sx={{ height: 560, width: "100%" }}>
          <DataGrid
            columns={columns}
            rows={rows}
            pageSize={10}
            rowsPerPageOptions={[10]}
          />
        </Grid>
        <Grid item></Grid>
      </Grid>
    </ShopLayout>
  );
};

export default OrdersHistory;
