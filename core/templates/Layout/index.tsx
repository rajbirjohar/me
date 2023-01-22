import { Inter, Source_Serif_Pro } from "@next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--inter-font" });
export const sourceSerifPro = Source_Serif_Pro({
  subsets: ["latin"],
  variable: "--source-serif-pro-font",
  weight: "400",
});

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <main className={inter.className}>
      {props.children}{" "}
      <div
        style={{
          maxWidth: "var(--main-content)",
          padding: "0 var(--space-md)",
          margin: "0 auto",
        }}
      >
        <hr
          style={{
            marginTop: "var(--space-xl)",
            marginBottom: "-1px",
            zIndex: 5,
            position: "relative",
          }}
        />
      </div>
    </main>
  );
}
