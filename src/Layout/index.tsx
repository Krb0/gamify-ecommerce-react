import Announcement from "./Announcement";
import Navbar from "./Navbar";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Announcement />
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
