import {
  AccountCircleOutlined,
  AdminPanelSettings,
  CategoryOutlined,
  ConfirmationNumberOutlined,
  EscalatorWarningOutlined,
  FemaleOutlined,
  MaleOutlined,
  VpnKeyOutlined,
} from "@mui/icons-material";

export const MenuItems = [
  {
    title: "Hombres",
    xs: { display: { xs: "", sm: "none" } },
    path: "/category/men",
    icon: <MaleOutlined />,
  },
  {
    title: "Mujeres",
    xs: { display: { xs: "", sm: "none" } },
    path: "/category/women",
    icon: <FemaleOutlined />,
  },
  {
    title: "Niños",
    path: "/category/kid",
    xs: { display: { xs: "", sm: "none" } },
    icon: <EscalatorWarningOutlined />,
  },
];

export const MenuUser = [
  {
    title: "Perfil",
    path: "/profile",
    xs: {},
    icon: <AccountCircleOutlined />,
  },
  {
    title: "Mis Ordenes",
    path: "/orders",
    xs: {},
    icon: <ConfirmationNumberOutlined />,
  },
  ...MenuItems,
  {
    title: "Ingresar",
    path: "/orders",
    xs: {},
    icon: <VpnKeyOutlined />,
  },
  {
    title: "Salir",
    path: "/salir",
    xs: {},
    icon: <ConfirmationNumberOutlined />,
  },
];

export const MenuAdmin = [
  {
    title: "Productos",
    path: "/products",
    xs: {},
    icon: <CategoryOutlined />,
  },
  {
    title: "Ordenes",
    path: "/products",
    xs: {},
    icon: <ConfirmationNumberOutlined />,
  },
  {
    title: "Usuarios",
    path: "/products",
    xs: {},
    icon: <AdminPanelSettings />,
  },
];
