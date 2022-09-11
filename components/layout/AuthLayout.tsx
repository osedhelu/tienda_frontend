import { LockOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  CssBaseline,
  createTheme,
  Grid,
  Link,
  Paper,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Head from "next/head";
import { FC } from "react";
import NextLink from "next/link";
import { BannerComppnet } from "../svg";
type state = "login" | "register";
interface props {
  title: string;
  state: state;
  children?: JSX.Element | JSX.Element[];
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}
export const Copyright = (props: any) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export const AuthLayout: FC<props> = ({
  children,
  title,
  state = "login",
  handleSubmit,
}) => {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid item xs={false} sm={4} md={7}>
            <BannerComppnet title={state == "login" ? "Login" : "Registro"} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlined />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                {children}
                <Grid container>
                  <Grid item xs></Grid>
                  <Grid item>
                    {state === "login" ? (
                      <NextLink href="/auth/register" passHref>
                        <Link href="#" variant="body2">
                          {"¿No tienes una cuenta? Registrate"}
                        </Link>
                      </NextLink>
                    ) : (
                      <>
                        {state === "register" && (
                          <NextLink href="/auth/login" passHref>
                            <Link href="#" variant="body2">
                              {"¿Tienes una cuenta? Login"}
                            </Link>
                          </NextLink>
                        )}
                      </>
                    )}
                  </Grid>
                </Grid>
                <Copyright sx={{ mt: 5 }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </main>
    </ThemeProvider>
  );
};
