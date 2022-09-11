import { FC } from "react";

interface props {
  result: any;
}

export const Result: FC<props> = ({ result }) => {
  return (
    <li>
      {result.codeResult.code} [{result.codeResult.format}]
    </li>
  );
};
