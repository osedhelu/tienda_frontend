import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Input,
  InputAdornment,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import {
  AccountCircleOutlined,
  AdminPanelSettings,
  CategoryOutlined,
  ConfirmationNumberOutlined,
  EscalatorWarningOutlined,
  FemaleOutlined,
  LoginOutlined,
  MaleOutlined,
  SearchOutlined,
  VpnKeyOutlined,
} from "@mui/icons-material";
import { MenuAdmin, MenuItems, MenuUser } from "@/database/menu";

export const SideMenu = () => {
  return (
    <Drawer
      open={false}
      anchor="right"
      sx={{ backdropFilter: "blur(4px)", transition: "all 0.5s ease-out" }}
    >
      <Box sx={{ width: 250, paddingTop: 5 }}>
        <List>
          <ListItem>
            <Input
              type="text"
              placeholder="Buscar..."
              endAdornment={
                <InputAdornment position="end">
                  <IconButton aria-label="toggle password visibility">
                    <SearchOutlined />
                  </IconButton>
                </InputAdornment>
              }
            />
          </ListItem>

          {MenuUser.map((e, index) => (
            <ListItem button key={index} sx={e.xs}>
              <ListItemIcon>{e.icon}</ListItemIcon>
              <ListItemText primary={e.title} />
            </ListItem>
          ))}

          {/* Admin */}
          <Divider />
          <ListSubheader>Admin Panel</ListSubheader>

          {MenuAdmin.map((e, index) => (
            <ListItem button key={index}>
              <ListItemIcon>{e.icon}</ListItemIcon>
              <ListItemText primary={e.title} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
