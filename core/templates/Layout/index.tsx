export default function Layout(props: { children: React.ReactNode }) {
  return (
    <main>
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
