import localFont from "next/font/local";

export const sans = localFont({
  variable: "--sans",
  display: "swap",
  src: [
    {
      path: "./fonts/silka/silka-thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/silka/silka-extralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/silka/silka-light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/silka/silka-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/silka/silka-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/silka/silka-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/silka/silka-black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/silka/silka-thinitalic.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "./fonts/silka/silka-extralightitalic.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "./fonts/silka/silka-lightitalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/silka/silka-regularitalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/silka/silka-mediumitalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/silka/silka-bolditalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/silka/silka-blackitalic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
});

export const mono = localFont({
  variable: "--mono",
  display: "swap",
  src: [
    {
      path: "./fonts/silka-mono/silkamono-thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/silka-mono/silkamono-extralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/silka-mono/silkamono-light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/silka-mono/silkamono-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/silka-mono/silkamono-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/silka-mono/silkamono-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/silka-mono/silkamono-thinitalic.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "./fonts/silka-mono/silkamono-extralightitalic.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "./fonts/silka-mono/silkamono-lightitalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/silka-mono/silkamono-regularitalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/silka-mono/silkamono-mediumitalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/silka-mono/silkamono-bolditalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
});

export const serif = localFont({
  variable: "--serif-alt",
  display: "swap",
  src: [
    {
      path: "./fonts/calendas-plus/calendas-plus.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/calendas-plus/calendas-plus-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/calendas-plus/calendas-plus-italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
});

export const serifAlternative = localFont({
  variable: "--serif",
  display: "swap",
  src: [
    {
      path: "./fonts/novela/novela-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/novela/novela-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/novela/novela-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/novela/novela-black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/novela/novela-regularitalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/novela/novela-semibolditalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/novela/novela-bolditalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/novela/novela-blackitalic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
});

export const serifDisplay = localFont({
  variable: "--serif-display",
  display: "swap",
  src: [
    {
      path: "./fonts/novela/novela-displayregular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/novela/novela-displayitalic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
});
