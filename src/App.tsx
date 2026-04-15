import Footer from "./common/components/Footer";
import MobileNavbar from "./common/components/MobileNavbar";
import Navbar from "./common/components/Navbar";

const App = () => {
  return (
    <div className=" w-full text-4xl">
      <div className=" m-auto">
        <Navbar />
        {/* <MobileNavbar /> */}

        <Footer />
      </div>
    </div>
  );
};

export default App;
