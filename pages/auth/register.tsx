import { AuthLayout } from "@/components/layout";
import { TextField, Button } from "@mui/material";
import { NextPage } from "next";

interface props {}

const AuthRegister: NextPage<props> = ({}) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
      username: data.get("username"),
    });
  };
  return (
    <AuthLayout
      handleSubmit={handleSubmit}
      title={"Pagina de Registro"}
      state={"register"}
    >
      <TextField
        margin="normal"
        required
        fullWidth
        id="username"
        label="username"
        name="username"
        autoComplete=""
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <Button
        type="submit"
        fullWidth
        variant="outlined"
        color="primary"
        sx={{ mt: 3, mb: 2 }}
      >
        Registrar
      </Button>
    </AuthLayout>
  );
};

export default AuthRegister;
