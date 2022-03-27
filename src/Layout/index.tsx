import { chakra } from "@chakra-ui/react";
import Announcement from "./Announcement";
import Navbar from "./Navbar";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Announcement />
      <Navbar />
      <chakra.main>{children}</chakra.main>
    </>
  );
};

export default Layout;
