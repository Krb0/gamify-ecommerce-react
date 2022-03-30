import { chakra } from "@chakra-ui/react";
import Announcement from "./Announcement";
import Footer from "./Footer";
import Navbar from "./Navbar";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Announcement />
      <Navbar />
      <chakra.main>{children}</chakra.main>
      <Footer />
    </>
  );
};

export default Layout;
