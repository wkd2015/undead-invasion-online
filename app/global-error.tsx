"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            background: "#0a0a0a",
            color: "#fafafa",
          }}
        >
          <main style={{ maxWidth: 420, textAlign: "center" }}>
            <h1 style={{ fontSize: "1.5rem", marginBottom: 8 }}>Critical error</h1>
            <p style={{ color: "#a3a3a3", marginBottom: 24 }}>
              The application failed to render. Please try again.
            </p>
            <button
              type="button"
              onClick={reset}
              style={{
                padding: "10px 20px",
                borderRadius: 8,
                border: "1px solid #fafafa",
                background: "transparent",
                color: "#fafafa",
                cursor: "pointer",
              }}
            >
              Try again
            </button>
            {process.env.NODE_ENV === "development" ? (
              <pre
                style={{
                  marginTop: 24,
                  textAlign: "left",
                  fontSize: 12,
                  overflow: "auto",
                  maxHeight: 160,
                  background: "#171717",
                  padding: 12,
                  borderRadius: 8,
                }}
              >
                {error.message}
              </pre>
            ) : null}
          </main>
        </div>
      </body>
    </html>
  );
}
