import { Inter } from "@next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--inter-font" });

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <main className={inter.className}>
      {props.children}{" "}
      <hr
        style={{
          marginTop: "var(--space-xl)",
          marginBottom: "-1px",
          zIndex: 5,
          position: "relative",
        }}
      />
    </main>
  );
}
