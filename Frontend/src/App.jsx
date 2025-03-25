import Project from "./Components/Project/Project";
import Footer from "./Components/Footer/Footer";
import TwoD_Staging from "./Components/TwoD_Staging/TwoD_Staging";
import Testimonial from "./Components/Testimonial/Testimonial";
import FeedbackForm3D from "./Components/Feedback/Feedback";
import Cards from "./Components/Cards/Cards";
import Banner from "./Components/Banner/Banner";
import Reviews from "./Components/Testimonial/Reviews"; 

const App = () => {
  return (
    <div>
      <section id="Banner">
        <Banner />
      </section>
      <section id="Cards">
        <Cards />
      </section>
      <section id="Project">
        <Project />
      </section>
      <section id="TwoD_Staging">
        <TwoD_Staging />
      </section>
      <section id="Testimonial">
        <Testimonial Reviews={Reviews} /> 
      </section>
      <section id="Feedback">
        <FeedbackForm3D />
      </section>
      <section id="Footer">
        <Footer />
      </section>
    </div>
  );
};

export default App;
