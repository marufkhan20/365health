import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0F3B26",
          borderRadius: 4,
          position: "relative",
        }}
      >
        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#C4691F",
            position: "absolute",
            top: 6,
            right: 6,
          }}
        />
        <span
          style={{
            fontSize: 15,
            fontWeight: 700,
            color: "#F4FAF6",
            letterSpacing: -0.5,
          }}
        >
          365
        </span>
      </div>
    ),
    { ...size }
  );
}
