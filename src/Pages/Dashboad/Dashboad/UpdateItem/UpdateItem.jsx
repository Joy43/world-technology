import { useLoaderData } from "react-router-dom";

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../Hooks/Axiospublic";
import useAxiosSecure from "../../../../Hooks/AxiosSequre";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const { name, category, itemproduct, price, _id } = useLoaderData();

  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    // console.log(data);
    // ----------image upload to imgbb ------------
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
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
      //
      const productRes = await axiosSecure.patch(
        `/product/${_id}`,
        productItem
      );
      // console.log(productRes.data);
      if (productRes.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is updated to the product.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log("with image url", res.data);
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">product Name*</span>
            </label>
            <input
              type="text"
              defaultValue={name}
              placeholder="Product Name"
              {...register("name", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex gap-6">
            {/* -------------category-----------------*/}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                defaultValue={category}
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="iPhone">Iphone</option>
                <option value="smartphones">smartphones</option>
                <option value="Tablet">Tablet</option>
                <option value="laptops">Laptop</option>
                <option value="home-decoration">Home-decoration</option>
              </select>
            </div>

            {/*------------- price ----------------------*/}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                defaultValue={price}
                placeholder="Price"
                {...register("price", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/*--------------------itemproduct details ----------------*/}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Details</span>
            </label>
            <textarea
              defaultValue={itemproduct}
              {...register("itemproduct")}
              className="textarea textarea-bordered h-24"
              placeholder="deatils"
            ></textarea>
          </div>
          {/* ---------------------image---------------------- */}
          <div className="form-control w-full my-6">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>

          <button className="btn">Update Product Item</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
