import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css"
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
