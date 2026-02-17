export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "sans-serif",
      textAlign: "center",
      padding: "2rem"
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        Navra Labs
      </h1>

      <p style={{ fontSize: "1.2rem", maxWidth: "600px", opacity: 0.8 }}>
        Building intelligent systems, autonomous platforms, and next-generation AI infrastructure.
      </p>

      <div style={{ marginTop: "2rem" }}>
        <a
          href="mailto:contact@navralabs.com"
          style={{
            padding: "0.8rem 1.5rem",
            backgroundColor: "black",
            color: "white",
            borderRadius: "6px",
            textDecoration: "none"
          }}
        >
          Contact Us
        </a>
      </div>
    </main>
  );
}
