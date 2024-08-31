import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import useCart from "../../../../Hooks/useCart";
import useAxiosSecure from "../../../../Hooks/AxiosSequre";


const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item?.price, 0);
  const axiosSecure = useAxiosSecure();

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
              text: "Your item has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-black">Products: {cart.length}</h2>
        <h2 className="text-3xl font-bold text-black">Total Price: ${totalPrice.toFixed(2)}</h2>
        {cart.length ? (
          <Link to="/dashboard/payment">
            <button className="btn btn-success">Pay</button>
          </Link>
        ) : (
          <button disabled className="btn btn-primary">Pay</button>
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg shadow overflow-hidden">
          <thead className="bg-gray-800 text-white text-lg">
            <tr>
              <th className="py-3 px-6">#</th>
              <th className="py-3 px-6">Image</th>
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">Price</th>
              <th className="py-3 px-6">Delete</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-lg">
            {cart.map((item, index) => (
              <tr key={item._id} className="border-b">
                <td className="py-3 px-6">{index + 1}</td>
                <td className="py-3 px-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12">
                      <img className="rounded-full object-cover" src={item.image} alt={item.name} />
                    </div>
                  </div>
                </td>
                <td className="py-3 px-6">{item.name}</td>
                <td className="py-3 px-6">${item.price.toFixed(2)}</td>
                <td className="py-3 px-6">
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn text-red-600 hover:text-red-800 transition duration-200"
                  >
                    <FaTrashAlt className="text-2xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
