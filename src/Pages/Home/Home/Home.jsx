import Cardshow from "../../Shared/Cardshow/Cardshow";
import Banner from "../Banner/Banner";
import Faq from "../Faq/Faq";
import { Helmet } from "react-helmet";

import Slider from "../Slider/Slider";

import Homeiphone from "../Homeiphone/Homeiphone";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home page</title>
        <meta name="description" content="Nested component" />
      </Helmet>
      <div>
        <Slider></Slider>
        {/* <Dslider></Dslider> */}
      </div>
      <div>
        <Banner></Banner>{" "}
      </div>

      <div>
        <Cardshow></Cardshow>{" "}
      </div>
      {/* <div><Homeiphonecard></Homeiphonecard></div>  */}
      <div>
        <Homeiphone></Homeiphone>
      </div>

      <div>
        <Faq></Faq>
      </div>
    </div>
  );
};

export default Home;
