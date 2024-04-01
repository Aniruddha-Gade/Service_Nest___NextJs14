import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Smart Home",
  description: "Generated Terminal_boyz",
  icons: {
    icon: '/assets/logo/smart-home-logo.jpg'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
