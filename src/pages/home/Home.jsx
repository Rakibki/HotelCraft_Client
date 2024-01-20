import Banner from "./Banner";
import CheckAvailability from "./CheckAvailability";
import Count from "./Count";
import Experience from "./Experience";
import Question from "./Question";
import Rooms from "./Rooms";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <CheckAvailability />
      <Services />
      <Rooms />
      <Experience />
      <Count />
      <Testimonials />
      <Question />
    </div>
  );
};

export default Home;
