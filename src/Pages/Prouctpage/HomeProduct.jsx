import Products from "./Products/Products";
import Videobg from "./Video backgroun/Videobg";
// import Videoslider from "./Videoslider/Videoslider";
import {Helmet} from "react-helmet";

const HomeProduct = () => {
    return (
        
        <div className="mt-10">
              <Helmet>
                <meta charSet="utf-8" />
                <title>Products</title>
                <link rel="canonical" href="" />
            </Helmet>
            <div>
           {/* <Videoslider></Videoslider>  */}
           <Videobg></Videobg>
        </div>
        <div>
            <Products></Products>
        </div>
        </div>
    );
};

export default HomeProduct;