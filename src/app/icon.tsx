import { ImageResponse } from "next/og";

// Route segment config
// export const runtime = "edge"; // Commenting out to force default runtime to avoid Vercel timeouts/crashes

// Image metadata
export const size = {
    width: 32,
    height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            /* Abstract Spine/Force Concept: Two interlocking rings */
            <div
                style={{
                    fontSize: 24,
                    background: "transparent",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                }}
            >
                {/* Outer Ring */}
                <div
                    style={{
                        position: "absolute",
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        border: "2px solid #666",
                        opacity: 0.5,
                    }}
                />
                {/* Accent Ring */}
                <div
                    style={{
                        position: "absolute",
                        width: "26px",
                        height: "16px",
                        borderRadius: "50%",
                        border: "2px solid #ff4500",
                        transform: "rotate(-30deg)",
                    }}
                />
                {/* White Ring */}
                <div
                    style={{
                        position: "absolute",
                        width: "26px",
                        height: "16px",
                        borderRadius: "50%",
                        border: "1.5px solid white",
                        transform: "rotate(60deg)",
                    }}
                />
                {/* Center */}
                <div style={{ width: 4, height: 4, background: "#ff4500", borderRadius: "50%" }} />
            </div>
        ),
        {
            ...size,
        }
    );
}
