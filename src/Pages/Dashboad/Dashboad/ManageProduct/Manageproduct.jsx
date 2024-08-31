import useProduct from "../../../../Hooks/useProduct";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import "./ManageProduct.css";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/AxiosSequre";
import { Link } from "react-router-dom";

const Manageproduct = () => {
  const [product] = useProduct([]);
  const axiosSecure = useAxiosSecure();


  // --------------delete-----------------
  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/product/${item._id}`);
        // console.log(res.data);
        if (res.data.deletedCount > 0) {
          // refetch to update the ui
         
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
     
      <div className="col-span-12">
        <div className="overflow-auto lg:overflow-visible ">
          <table className="table text-gray-400 border-separate space-y-6 text-sm">
            {/* ----------HEADER---------- */}
            
            <thead className="bg-gray-800 text-xl text-white">
              <tr>
                <th className="p-3">#</th>
                <th className="p-3">Brand</th>
                <th className="p-3 text-left">Category</th>
                <th className="p-3 text-left">Price</th>
                <th className="p-3 text-left">Upadate</th>
                <th className="p-3 text-left">Delete</th>
              </tr>
            </thead>
            {/*-----------------body-------------- */}
            <tbody>
              {product.map((item, index) => (
                <tr key={item._id} className="bg-gray-800">
                  <td>{index + 1}</td>
                  <td className="p-3">
                    <div className="flex align-items-center">
                      <img
                        className="rounded-full h-12 w-12  object-cover"
                        src={item.image}
                        alt="unsplash image"
                      />
                      <div className="ml-3">
                        <div className="">{item.name}</div>
                    
                      </div>
                    </div>
                  </td>
                  <td className="p-3">{item.category}</td>
                  <td className="text-right">${item.price}</td>

                  {/* ----------update------- */}

                  
                  <td>
                    <Link to={`/dashboard/updateItem/${item._id}`}>
                      <button className="btn btn-ghost btn-lg ">
                        <FaEdit
                          className="text-white"
                                        
                        ></FaEdit>
                      </button>
                    </Link>
                  </td>
                  {/* ----------delete---------- */}
                  <td className="p-3 ">
                    <button
                      onClick={() => handleDeleteItem(item)}
                      className="btn btn-ghost btn-lg"
                    >
                      <FaTrashAlt className=""></FaTrashAlt>{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Manageproduct;
