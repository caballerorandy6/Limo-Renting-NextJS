//Custom Components
import Navbar from "@/components/layout/nav/Navbar";

const Header = () => {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </header>
      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-16 sm:h-20 xl:h-28" />
    </>
  );
};

export default Header;
