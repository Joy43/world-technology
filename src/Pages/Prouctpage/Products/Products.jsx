import { useState } from "react";

import Cardproducts from "../Cardproducts/Cardproducts";
import useProduct from "../../../Hooks/useProduct";
const Products = () => {
  const [search, setSearch] = useState('');
  const [product] = useProduct(search);
  // console.log(product);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    setSearch(searchText);
  };

  return (
    <div>
      {/*---------- search  ------------------*/}

      <div className="mt-6 mb-7">
      <div className="w-full flex flex-row flex-wrap bg-gray-600 p-10 py-20 justify-center" style={{ backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply', backgroundPosition: 'center center', backgroundImage: "url('https://images.unsplash.com/photo-1573079487717-f8ebae0b1539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80')" }}>
      <div className="w-full text-center">
        <div className="text-3xl text-center text-white antialiased">Get search</div>
        <div className="text-xl text-center text-white antialiased">Find out the Technology product around world</div>
      </div>

      <form  onSubmit={handleSearch} className="mt-3 flex flex-row flex-wrap" >
        <div className="text-white w-2/3">
          <input type="text" name="search" className="w-full p-2 rounded-l-lg" placeholder="Name,Title.." />
        </div>
        <div className="w-1/3">
          <button className="w-full text-white p-2 bg-indigo-400 rounded-r-lg text-center hover:bg-indigo-300" type="submit">Search</button>
        </div>
      </form>
    </div>
      </div>
      {/* -------------card product--------------- */}
      <div className="grid md:grid-cols-3 gap-5">
        {product.map((item) => (
          <Cardproducts key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
