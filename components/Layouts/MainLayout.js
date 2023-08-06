import Navbar from "../Navbar";
import Footer from "../Footer";

const MainLayout = ({ children }) => {
  return (
    <main className="overflow-hidden">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
