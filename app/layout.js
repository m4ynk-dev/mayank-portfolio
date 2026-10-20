import "./globals.css";

export const metadata = {
  title: "Mayank — somewhere between noise & nostalgia",
  description:
    "Mayank's personal portfolio: frontend experiments, late-night music, and things made with feeling.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
