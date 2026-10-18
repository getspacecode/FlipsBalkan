import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./comps/sideComps/Navbar";
import Footer from "./comps/sideComps/Footer.jsx";
const font = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});
export const metadata = {
  title: "FlipsBalkan",
  description: "Najbolja reselling grupa na balkanu!",
  icons: {
    icon: "/logo.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${font.className} text-white bg-neutral-900 antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
