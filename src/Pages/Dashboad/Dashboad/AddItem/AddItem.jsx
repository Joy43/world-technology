import { useForm } from "react-hook-form";
import { FaShoppingCart } from "react-icons/fa";
import Swal from "sweetalert2";

import useAxiosPublic from "../../../../Hooks/Axiospublic";
import useAxiosSecure from "../../../../Hooks/AxiosSequre";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await useAxiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const productItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        itemproduct: data.itemproduct,
        image: res.data.data.display_url,
      };

      const productRes = await axiosSecure.post("/product", productItem);
      if (productRes.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is added to the menu.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log("image url", res.data);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Product Name*
          </label>
          <input
            type="text"
            placeholder="Product Name"
            {...register("name", { required: true })}
            className="input input-bordered w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        <div className="flex gap-6 mb-6">
          <div className="form-group w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category*
            </label>
            <select
              defaultValue="default"
              {...register("category", { required: true })}
              className="select select-bordered w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200"
            >
              <option disabled value="default">
                Select a category
              </option>
              <option value="iPhone">Iphone</option>
              <option value="smartphones">Smartphones</option>
              <option value="Tablet">Tablet</option>
              <option value="laptops">Laptop</option>
              <option value="home-decoration">Home Decoration</option>
            </select>
          </div>

          <div className="form-group w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price*
            </label>
            <input
              type="number"
              placeholder="Price"
              {...register("price", { required: true })}
              className="input input-bordered w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>
        </div>

        <div className="form-group mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Product Details
          </label>
          <textarea
            {...register("itemproduct")}
            className="textarea textarea-bordered w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200"
            placeholder="Details"
          ></textarea>
        </div>

        <div className="form-group mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Upload Image*
          </label>
          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        <button className="btn bg-indigo-600 text-white p-3 rounded shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-200 flex items-center">
          Add Product <FaShoppingCart className="ml-4" />
        </button>
      </form>
    </div>
  );
};

export default AddItems;
