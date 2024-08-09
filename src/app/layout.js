import {  Work_Sans } from "next/font/google";
import "../styles/globals.css";

const workSans = Work_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: "Pic Tensor",
  description: "Pic Tensor Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={workSans.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
