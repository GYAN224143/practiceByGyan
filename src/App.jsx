import Home from "./Pages/Home";
import Material from "./Pages/Material";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className=" w-full relative">
      <Navbar />
      <Aside />
      <div className=" bg-pink-500 pl-[352px] pr-4">
        <Home />
        <Material/>
        <Home />
        <Material/>
      </div>

      <Footer />
    </div>
  );
};

export default App;
