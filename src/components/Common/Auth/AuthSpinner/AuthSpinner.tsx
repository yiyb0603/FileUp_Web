import React from "react";
import { Spinner } from "@class101/ui";
import { Palette } from "styles/Palette/Palette";

const AuthSpinner = (): JSX.Element => {
  const { white, main } = Palette;

  return (
    <Spinner backgroundColor={main} color={white} />
  );
};

export default AuthSpinner;
