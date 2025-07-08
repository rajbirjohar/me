import React from "react";
import { LoaderPinwheelIcon } from "lucide-react";

import styles from "./styles.module.css";

const Loader = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  ({ className, ...props }, ref) => (
    <LoaderPinwheelIcon ref={ref} className={styles.loadingicon} {...props} />
  )
);

Loader.displayName = "Loader";

export { Loader };
