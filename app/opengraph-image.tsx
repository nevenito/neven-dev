import { ImageResponse } from "next/og";
import { siteConfig } from "./seo";

export const alt = `${siteConfig.name} - frontend and product engineer`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#1f1f1f",
          color: "#f5f5f5",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: "78px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "34px" }}>
          <div
            style={{
              color: "#aebdff",
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              fontFamily: "serif",
              fontSize: 112,
              letterSpacing: "-0.02em",
              lineHeight: 0.92,
              maxWidth: 900,
            }}
          >
            I build software
          </div>
          <div
            style={{
              color: "#d7d7d7",
              fontSize: 34,
              lineHeight: 1.35,
              maxWidth: 920,
            }}
          >
            Frontend and product engineering for web, mobile, desktop, and
            AI-heavy products.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
