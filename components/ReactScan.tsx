"use client"

import { scan } from "react-scan";
import { JSX, useEffect } from "react";

const ReactScan = (): JSX.Element => {
 useEffect(() => {
    scan({
      enabled: true,
    });
  }, []);

  return <></>;
}

export default ReactScan