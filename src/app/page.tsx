import Banner from "./Components/Home/Banner";
import Home_Service from "./Components/Home/Home_Service";
import Navbar from "./Components/Home/Navbar";
import Topbar from "./Components/Home/Topbar";

export default function Home() {
  return (
    <>
    <Topbar />
    <Navbar />
    <Banner />
    <Home_Service /> 
    </>
  );
}
