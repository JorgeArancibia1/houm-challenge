import styles from "./layoutStyle";
import Header from "../Header/Header";
import { Navbar } from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      <main className="main">{children}</main>
      <Footer />
      <style jsx>{styles}</style>
    </>
  );
};
