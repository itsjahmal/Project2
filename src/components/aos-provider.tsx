
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type Props = {
  children: React.ReactNode;
};

export function AOSProvider({ children }: Props) {
  useEffect(() => {
    AOS.init({
      duration: 750,
      easing: "ease-in-out-quad",
      once: true,
      startEvent: "DOMContentLoaded",
    });
  }, []);

  return <>{children}</>;
}
