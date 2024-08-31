import Swal from "sweetalert2";


import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import useaxiosSequre from "../../../../Hooks/AxiosSequre";
import useCart from "../../../../Hooks/useCart";

const Cart = () => {
  const [cart, refetch] = useCart();

  const totalPrice = cart.reduce((total, item) => total + item?.price, 0);
  // const axiosPublic = useAxiosPublic()
  const axiosSecure = useaxiosSequre();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="flex justify-evenly mb-8">
        <h2 className="text-3xl">product: {cart.length}</h2>
        <h2 className="text-3xl">Total Price: {totalPrice}</h2>
        {/* ----------payment interget----------- */}
        {cart.length ? (
          <Link to="/dashboard/payment">
            <button className="btn btn-success">paly</button>
          </Link>
        ) : (
          <button disabled className="btn btn-primary">
            Pay
          </button>
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="table bg-gray-900 text-white  w-full">
          {/*-------------- head --------------------*/}
          <thead>
            <tr className="text-white  text-2xl">
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr className="bg-gray-800" key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center  gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrashAlt className="bg-slate-900"></FaTrashAlt>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Cart;
