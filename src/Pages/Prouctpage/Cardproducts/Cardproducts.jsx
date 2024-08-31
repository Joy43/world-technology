import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../../Hooks/usecart";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/AxiosSequre";

// import useaxiosSequre from '../../../Hooks/AxiosSequre';

const Cardproducts = ({ product }) => {
  const { name, price, image, description, brand, rating, category, _id } =
    product;

  const [refetch] = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // -------------ADD TO CART---------------
  const handleAddToCart = () => {
    if (user && user.email) {
      //send cart item to the database
      const cartItem = {
        productId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        // console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          // refetch cart to update the cart items count
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          //   send the user to the login page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div style={{ perspective: 2000 }}>
      <div
        data-aos="fade-up-right"
        className="card w-96 bg-base-300 shadow-2xl shadow-lime-200 "
      >
        <figure className="px-10 pt-10">
          <div className="relative mx-4 mt-4 h-80 object-cover overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <img src={image} alt="prodct" />
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="justify-around flex">
            <div>
              <p className="text-xl font-extrabold"> ${price}</p>
            </div>
            <div>
              <p className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                Band:{brand}
              </p>
            </div>
          </div>
          {/* ---------------------button --------------------- */}
          <div className=" text-center  justify-center">
            <Link>
              <button
                onClick={handleAddToCart}
                className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow"
              >
                <div className="absolute inset-0 w-3 bg-blue-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-black">Add to cart</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* </motion.div> */}
    </div>
  );
};

export default Cardproducts;
