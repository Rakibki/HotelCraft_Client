import Banner from "./Banner";
import CheckAvailability from "./CheckAvailability";
import Count from "./Count";
import Experience from "./Experience";
import Rooms from "./Rooms";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <CheckAvailability />
      <Services />
      <Experience />
      <Rooms />
      <Count />
    </div>
  );
};

export default Home;
