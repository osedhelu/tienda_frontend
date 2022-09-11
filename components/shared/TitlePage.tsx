import { Typography } from "@mui/material";
import { FC } from "react";

interface props {
  title: string;
  description: string;
}

export const TitlePage: FC<props> = ({ description, title }) => {
  return (
    <>
      <Typography variant="h1" component={"h1"}>
        {title}
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        {description}
      </Typography>
    </>
  );
};
