import { AuthLayout } from "@/components/layout";
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  createTheme,
} from "@mui/material";
import { NextPage } from "next";

interface props {}

const AuthLoginComponent: NextPage<props> = ({}) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <AuthLayout
      handleSubmit={handleSubmit}
      state="login"
      title={"Auth | login"}
    >
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
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
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button
        type="submit"
        fullWidth
        variant="outlined"
        color="primary"
        sx={{ mt: 3, mb: 2 }}
      >
        Login
      </Button>
    </AuthLayout>
  );
};

export default AuthLoginComponent;
